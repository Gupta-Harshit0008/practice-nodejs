
const arrr=[
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Happiness is not something you postpone for the future; it is something you design for the present.",
    "In the midst of chaos, there is also opportunity.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Your time is limited, don't waste it living someone else's life.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The best way to predict the future is to create it.",
    "Life is what happens when you're busy making other plans.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "The way to get started is to quit talking and begin doing.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You have within you right now, everything you need to deal with whatever the world can throw at you.",
  "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
  "Success is not in what you have, but who you are.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Believe in the magic within you, for it has the power to turn dreams into reality.",
  "Life is a journey, not a destination. Enjoy the scenery along the way.",
  "Challenges are the stepping stones to success; embrace them with courage and determination.",
  "In the symphony of existence, let your unique melody play boldly.",
  "The seeds of kindness you plant today will bloom into a garden of joy tomorrow.",
  "Don't count the days; make the days count.",
  "The greatest adventure is what lies ahead. Seize it with an open heart and a curious mind.",
  "Courage is not the absence of fear but the triumph over it.",
  "Your potential is like an endless ocean; dive deep and discover the treasures within.",
  "Embrace change, for it is the only constant in the beautiful chaos of life.",
  "Let gratitude be the song of your heart, and kindness be the rhythm of your soul.",
  "In the dance of time, every step forward is a chance to rewrite your story.",
  "The stars can't shine without darkness. Embrace challenges as opportunities for growth.",
  "Find joy in the ordinary, and you'll discover the extraordinary in every moment.",
  "The secret to getting ahead is getting started. Take that first step today.",
  "In the tapestry of life, every thread, no matter how small, adds to the beauty of the whole.",
  "Success is not a destination; it's a journey of continuous improvement and self-discovery.",
  "The mind is a garden; your thoughts are the seeds. Choose wisely what you plant.",
  "Life is a canvas; paint it with colors of love, laughter, and adventure.",
  "Celebrate the small victories, for they are the building blocks of a meaningful life."
]
    

    function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  exports.getQuote=(req,res)=>{
    let val=between(0,50)
    console.log(val)
    
  // console.log(arrr[val])
  let quote=arrr[val]
  if(arrr.length < val)
  return  res.status(404).json({
        status:'failure',
        message:'Adding more quotes.. sorry for the inconvinces'
    })
    res.status(200).json({
        status:'success',
        data:{
            quote
        }
    })
    
  }