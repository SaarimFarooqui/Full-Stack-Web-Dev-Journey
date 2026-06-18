import React, { use, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 

  const [id, setId] = useState(null);


  const psychologyFacts = [
  { id: 1,
    Question: "Why do people often remember unfinished tasks better than completed ones?",
    Answer: "This is known as the Zeigarnik Effect. The brain tends to keep unfinished tasks active in memory, making them easier to recall than completed tasks."
  },
  { id: 2,
    Question: "Why do people sometimes value things more after putting effort into them?",
    Answer: "This is called the IKEA Effect. People tend to place a higher value on things they helped create or assemble themselves."
  },
  { id: 3,
    Question: "Why do first impressions have such a strong influence?",
    Answer: "The Primacy Effect causes information received first to have a disproportionate impact on how we perceive a person or situation."
  },
  { id: 4,
    Question: "Why can repeating a statement make it seem more believable?",
    Answer: "The Illusory Truth Effect makes people more likely to believe information simply because they have heard it multiple times, regardless of its accuracy."
  },
  { id: 5,
    Question: "Why do people often fail to notice obvious changes in their surroundings?",
    Answer: "This phenomenon, known as Change Blindness, occurs because the brain focuses attention on specific details and may overlook significant changes elsewhere."
  },
  { id: 6,
    Question: "Why do people tend to continue investing in bad decisions?",
    Answer: "The Sunk Cost Fallacy causes individuals to persist with a decision because they have already invested time, money, or effort into it."
  },
  { id: 7,
    Question: "Why do groups sometimes make worse decisions than individuals?",
    Answer: "Groupthink can occur when the desire for harmony or conformity in a group suppresses critical thinking and alternative viewpoints."
  },
  { id: 8,
    Question: "Why do people often overestimate how much others notice them?",
    Answer: "The Spotlight Effect is the tendency to believe that others pay more attention to our appearance, mistakes, or behavior than they actually do."
  },
  { id: 9,
    Question: "Why do memories become less accurate over time?",
    Answer: "Memory is reconstructive rather than reproductive. Each time a memory is recalled, it can be subtly altered before being stored again."
  }
];

  return <> 
  <div id='background'>
    <div id='header'><p>PSYCHOLOGY FACTS</p></div>
    <div id='mainbody'>
      { 
        psychologyFacts.map((fact) => <div 
        className = { id === fact.id ? `flashcards flashcards-answer` : `flashcards` } 
        onClick={ () => setId( fact.id !== id ? fact.id : null) }>
        {id !== fact.id ? fact.Question : fact.Answer}
        </div>)
      }
    </div>
    <div id='information'>{id !== null ? `Selected Card Id: ${id}`: "Select a Card"}</div>
  </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)