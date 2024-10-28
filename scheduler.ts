type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Lesson = {
    title:string
    duration:number
};

export type Availability = {
    id: number
    day: number
    startTime: string
    endTime: string
};

export type Schedule = {
    availabilityId: number
    lessons: Lesson[]

};

class Scheduler {
    constructor(private lessons: Lesson[], private availabilities: Availability[]) {
        
    }

    schedule(): Schedule[] {
        // TODO implement algorithm for scheduling here
        let availId: number = 0
        let duration: number = 0
        let timeLeft: number = 0
        let lesson: Lesson[] = []
        let schedule: Schedule[] = []
    
    
        this.availabilities.map(item => {
            availId = item.id
            duration = (parseInt(`${item.endTime}`) - parseInt(`${item.startTime}`)) * 60
            timeLeft = timeLeft == 0 && schedule.length == 0 ? duration : timeLeft
            this.lessons.map(data => {
                lesson = [...lesson, data]
                timeLeft = timeLeft - data.duration
                if (timeLeft <= 0) {
                    return
                }
    
            })
         
            schedule.push({
                availabilityId: availId,
                lessons: lesson
            })
    
        })
     
    
        return [...schedule];
    }
}

export default Scheduler;
