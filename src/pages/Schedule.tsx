
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Video, Mic, MicOff, VideoOff, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Team members data (same as used in TeamSection)
const teamMembers = [
  {
    id: "alexandra-chen",
    name: "Alexandra Chen",
    position: "Principal Architect & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    availability: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"]
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    position: "Senior Design Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    availability: ["9:00 AM - 11:00 AM", "3:00 PM - 5:00 PM"]
  },
  {
    id: "sophia-rodriguez",
    name: "Sophia Rodriguez",
    position: "Interior Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    availability: ["11:00 AM - 1:00 PM", "4:00 PM - 6:00 PM"]
  },
  {
    id: "david-nguyen",
    name: "David Nguyen",
    position: "Sustainability Expert",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    availability: ["10:00 AM - 12:00 PM", "1:00 PM - 3:00 PM"]
  },
  {
    id: "olivia-park",
    name: "Olivia Park",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    availability: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"]
  },
  {
    id: "raj-patel",
    name: "Raj Patel",
    position: "Urban Design Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    availability: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"]
  }
];

interface Meeting {
  id: string;
  architectId: string;
  architectName: string;
  date: Date;
  time: string;
}

const Schedule = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedArchitect, setSelectedArchitect] = useState<typeof teamMembers[0] | null>(null);
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openTimeSelect, setOpenTimeSelect] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [openMeetingDialog, setOpenMeetingDialog] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  // If there's an ID parameter, automatically open dialog with that architect
  useState(() => {
    if (id) {
      const architect = teamMembers.find(member => member.id === id);
      if (architect) {
        setSelectedArchitect(architect);
        setOpenDialog(true);
      }
    }
  });

  const handleSelectArchitect = (architect: typeof teamMembers[0]) => {
    setSelectedArchitect(architect);
    setOpenDialog(true);
    setDate(undefined);
    setSelectedTime("");
  };

  const handleScheduleMeeting = () => {
    if (selectedArchitect && date && selectedTime) {
      const newMeeting = {
        id: Date.now().toString(),
        architectId: selectedArchitect.id,
        architectName: selectedArchitect.name,
        date: date,
        time: selectedTime
      };

      setMeetings([...meetings, newMeeting]);
      
      toast({
        title: "Meeting Scheduled",
        description: `Your meeting with ${selectedArchitect.name} is scheduled for ${format(date, "MMMM d, yyyy")} at ${selectedTime}.`
      });

      // Reset and close dialog
      setOpenDialog(false);
      setDate(undefined);
      setSelectedTime("");
    }
  };

  const handleJoinMeeting = (meeting: Meeting) => {
    setSelectedMeeting(meeting);
    setOpenMeetingDialog(true);
  };

  const startMeeting = () => {
    toast({
      title: "Meeting Started",
      description: "You've joined the virtual meeting."
    });
    setOpenMeetingDialog(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Schedule a Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Book a one-on-one meeting with our expert architects to discuss your project needs.
            </p>
          </div>
        </div>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main content with two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Available Architects */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Available Architects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {teamMembers.map((architect) => (
                    <Card 
                      key={architect.id} 
                      className="cursor-pointer hover:border-primary transition-all hover:shadow-md"
                      onClick={() => handleSelectArchitect(architect)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={architect.image} alt={architect.name} />
                            <AvatarFallback>{architect.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{architect.name}</CardTitle>
                            <CardDescription>{architect.position}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">Available Times:</p>
                        <div className="space-y-1">
                          {architect.availability.map((time, index) => (
                            <div key={index} className="text-sm bg-secondary/30 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                              {time}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Scheduled Meetings */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Scheduled Meetings</h2>
                {meetings.length > 0 ? (
                  <div className="space-y-4">
                    {meetings.map((meeting) => (
                      <Card key={meeting.id} className="overflow-hidden">
                        <CardHeader className="pb-2 bg-secondary/10">
                          <CardTitle className="text-lg">{meeting.architectName}</CardTitle>
                          <CardDescription>
                            {format(meeting.date, "MMMM d, yyyy")} at {meeting.time}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-4">
                          <Button 
                            onClick={() => handleJoinMeeting(meeting)}
                            className="w-full"
                          >
                            <Video className="mr-2 h-4 w-4" />
                            Join Meeting
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-muted/30 rounded-lg border border-border">
                    <p className="text-muted-foreground">No meetings scheduled yet.</p>
                    <p className="text-sm mt-2">Select an architect to book a consultation.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scheduling Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule a Consultation</DialogTitle>
            <DialogDescription>
              {selectedArchitect && `Book a meeting with ${selectedArchitect.name}`}
            </DialogDescription>
          </DialogHeader>
          
          {selectedArchitect && (
            <div className="space-y-4 py-4">
              <div className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={selectedArchitect.image} alt={selectedArchitect.name} />
                  <AvatarFallback>{selectedArchitect.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedArchitect.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedArchitect.position}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Date:</label>
                <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        setOpenCalendar(false);
                      }}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {date && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Time:</label>
                  <Popover open={openTimeSelect} onOpenChange={setOpenTimeSelect}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        {selectedTime ? selectedTime : <span>Pick a time</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-2">
                      <div className="space-y-2">
                        {selectedArchitect.availability.map((time, index) => (
                          <Button 
                            key={index} 
                            variant="ghost" 
                            className="w-full justify-start"
                            onClick={() => {
                              setSelectedTime(time);
                              setOpenTimeSelect(false);
                            }}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            </div>
          )}
          
          <DialogFooter className="flex sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>
            <Button 
              type="button" 
              onClick={handleScheduleMeeting}
              disabled={!date || !selectedTime}
            >
              Schedule Meeting
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Video Meeting Dialog */}
      <Dialog open={openMeetingDialog} onOpenChange={setOpenMeetingDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join Virtual Meeting</DialogTitle>
            <DialogDescription>
              {selectedMeeting && `Meeting with ${selectedMeeting.architectName} on ${format(selectedMeeting.date, "MMMM d, yyyy")} at ${selectedMeeting.time}`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-center py-6 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "h-12 w-12 rounded-full",
                videoEnabled ? "bg-secondary/50" : "bg-destructive/10 text-destructive"
              )}
              onClick={() => setVideoEnabled(!videoEnabled)}
            >
              {videoEnabled ? <Video /> : <VideoOff />}
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "h-12 w-12 rounded-full",
                audioEnabled ? "bg-secondary/50" : "bg-destructive/10 text-destructive"
              )}
              onClick={() => setAudioEnabled(!audioEnabled)}
            >
              {audioEnabled ? <Mic /> : <MicOff />}
            </Button>
          </div>
          
          <DialogFooter className="flex sm:justify-between">
            <Button
              type="button"
              variant="destructive"
              onClick={() => setOpenMeetingDialog(false)}
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button type="button" onClick={startMeeting}>
              Join Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Schedule;
