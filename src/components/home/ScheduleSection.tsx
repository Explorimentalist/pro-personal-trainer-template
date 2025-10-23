import { Button } from "@/components/ui/button";

export default function ScheduleSection() {
  const scheduleData = [
    {
      day: "Monday",
      classes: [
        { time: "06:00", name: "Morning Strength", trainer: "Sarah", duration: "60 min", spots: "4 spots left" },
        { time: "12:00", name: "Lunch Power Hour", trainer: "Mike", duration: "45 min", spots: "2 spots left" },
        { time: "18:30", name: "Evening HIIT", trainer: "Emma", duration: "45 min", spots: "Full" },
      ]
    },
    {
      day: "Tuesday", 
      classes: [
        { time: "07:00", name: "Yoga Flow", trainer: "Lisa", duration: "60 min", spots: "6 spots left" },
        { time: "17:00", name: "Strength & Conditioning", trainer: "James", duration: "60 min", spots: "3 spots left" },
        { time: "19:00", name: "Boxing Fundamentals", trainer: "Tony", duration: "45 min", spots: "1 spot left" },
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "06:30", name: "Functional Training", trainer: "Sarah", duration: "45 min", spots: "5 spots left" },
        { time: "12:15", name: "Core & Mobility", trainer: "Emma", duration: "30 min", spots: "8 spots left" },
        { time: "18:00", name: "CrossFit WOD", trainer: "Mike", duration: "60 min", spots: "2 spots left" },
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "07:30", name: "Pilates", trainer: "Lisa", duration: "45 min", spots: "4 spots left" },
        { time: "17:30", name: "Olympic Lifting", trainer: "James", duration: "75 min", spots: "3 spots left" },
        { time: "19:30", name: "Spin Class", trainer: "Emma", duration: "45 min", spots: "Full" },
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "06:00", name: "HIIT Bootcamp", trainer: "Tony", duration: "45 min", spots: "2 spots left" },
        { time: "12:00", name: "Stretch & Recovery", trainer: "Lisa", duration: "30 min", spots: "10 spots left" },
        { time: "18:00", name: "Friday Night Burn", trainer: "Mike", duration: "60 min", spots: "1 spot left" },
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "08:00", name: "Weekend Warriors", trainer: "Sarah", duration: "90 min", spots: "3 spots left" },
        { time: "10:00", name: "Family Fitness", trainer: "Emma", duration: "45 min", spots: "6 spots left" },
        { time: "16:00", name: "Open Gym", trainer: "Staff", duration: "120 min", spots: "Unlimited" },
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "09:00", name: "Sunday Slow Flow", trainer: "Lisa", duration: "60 min", spots: "8 spots left" },
        { time: "11:00", name: "Outdoor Bootcamp", trainer: "James", duration: "60 min", spots: "5 spots left" },
        { time: "17:00", name: "Recovery Session", trainer: "Sarah", duration: "45 min", spots: "12 spots left" },
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Weekly Class Schedule
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Join our diverse range of fitness classes designed for all levels. Book your spot today and start your transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
          {scheduleData.map((day) => (
            <div key={day.day} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4 text-center border-b border-gray-100 pb-2">
                {day.day}
              </h3>
              <div className="space-y-0">
                {day.classes.map((classItem, index) => (
                  <div key={index} className="py-3 border-b border-gray-100 last:border-b-0">
                    <h4 className="font-semibold text-sm text-gray-800 leading-tight mb-1">
                      {classItem.name}
                    </h4>
                    <span className="text-xs text-gray-400 block mb-1">with {classItem.trainer}</span>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm text-gray-900">{classItem.time}</span>
                      <span className="text-xs text-gray-400">{classItem.duration}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full inline-block ${
                      classItem.spots === "Full" 
                        ? "bg-red-100 text-red-700" 
                        : classItem.spots.includes("1 spot") || classItem.spots.includes("2 spots")
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {classItem.spots}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 text-sm text-white">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Limited spots</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Full</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button variant="fitness" size="lg">
            Book Your Class
          </Button>
        </div>
      </div>
    </section>
  );
}
