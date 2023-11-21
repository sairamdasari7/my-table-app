
import React from 'react';
import CustomTable from './Components/CustomTable';
import './App.css'; 

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'role', label: 'Job' }
  
];

const data = [
  { id: 1, name: 'Devaraya', role:'King' },
  { id: 2, name: 'Sharma', role:'Bhramin' },
  { id: 3, name: 'Naidu',role:'King' },
  { id: 4, name: 'Pawan kumar' ,role:'Kabadi'},
  { id: 5, name: 'Rohit',role:'Cricket'},
  { id: 6, name: 'Kohli',role:'Cricket' },
  { id: 7, name: 'Rahane',role:'Cricket' },
  { id: 8, name: 'Anand',role:'Chess' },
  { id: 9, name: 'Bumrah',role:'Cricket' },
  { id: 10, name: 'Shami',role:'Cricket' },
  { id: 11, name: 'Chetri',role:'Football' },
  { id: 12, name: 'Dhyan Chand',role:'Hockey' },
  { id: 13, name: 'Mandhana',role:'Cricket' },
  { id: 14, name: 'Kaur',role:'Cricket' },
  { id: 15, name: 'Radhika',role:'Cricket' },
  { id: 16, name: 'Ishan',role:'Cricket' },
  { id: 17, name: 'Rahul',role:'Cricket' },
  { id: 18, name: 'Sheryas',role:'Cricket' },
  { id: 19, name: 'Jadeja',role:'Cricket' },
  { id: 20, name: 'Ashwin',role:'Cricket' },
  { id: 21, name: 'Subash Chandra Bose',role:'Freedom Fighter & IDF Founder' },
  { id: 22, name: 'Modi',role:'Prime Minster' },
  { id: 23, name: 'Jai',role:'Name' },
  { id: 24, name: 'Shankar',role:'Foreign Minister' },
  { id: 25, name: 'Yogi',role:'Chief Minister' },
  { id: 26, name: 'Pawan kalyan',role:'Poitician / Actor' },
  { id: 27, name: 'Chiranjeevi',role:'Actor' },
  { id: 28, name: 'Ramcharan',role:'Actor' } ,
  { id: 29, name: 'Ranga',role:'Poitician' },
  { id: 30, name: 'Allu arjun',role:'Actor' },
  { id: 31, name: 'Varun Tej' ,role:'Actor'},
  { id: 32, name: 'Satwikh' ,role:'Badmintion'},
  { id: 33, name: 'Sai',role:'Badmintion' },
  { id: 34, name: 'Sindhu',role:'Badmintion' },
  { id: 35, name: 'Tendulkar',role:'Cricket' },
  { id: 36, name: 'Dhoni',role:'Cricket' },
  { id: 37, name: 'Apj',role:'Ex-President' },
  { id: 38, name: 'Atal',role:'Poitician / Ex-Prime Minister' },
  { id: 39, name: 'Ganga',role:'River' },
  { id: 40, name: 'Krishna',role:'River' },
  { id: 41, name: 'Godavari',role:'River' },
  { id: 42, name: 'Yamuna',role:'River' },
  { id: 43, name: 'Kailash',role:'Sacred Mountain' },
  { id: 44, name: 'Govindh',role:'God' },
  { id: 45, name: 'Lakshmi',role:'Goddess' },
  { id: 46, name: 'Shiva',role:'God' },
  { id: 47, name: 'Gowri',role:'Goddess' },
  { id: 48, name: 'Arjun',role:'Greatest Archerer' },
  { id: 49, name: 'Bheem',role:'Strongest Human' },
  { id: 50, name: 'Bhagath Singh',role:'Freedom Fighter' }
 
  
];

function App() {
  return (
    <div className="App">
      <CustomTable columns={columns} data={data} />
    </div>
  );
}

export default App;
