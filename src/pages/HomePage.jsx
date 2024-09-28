import React from 'react';
import Hero from '../components/Hero';
import CategorySelector from '../components/CategorySelector';

const HomePage = () => {
  const apiData = [
    {
      icon: "https://img.icons8.com/color/4800/youtube-play.png",
      iconAlt: "youtube-play",
      mention: "Mention of Youtube in Appsumo. 3 hours ago",
      title: "Chat Pixel Review : appsumo Lifetime Deal Worth Your Money?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Category image"
    },
    {
      icon: "https://img.icons8.com/color/4800/twitter.png",
      iconAlt: "twitter",
      mention: "Mention of Twitter in TechCrunch. 5 hours ago",
      title: "Twitter's New Feature: What You Need to Know",
      description: "Twitter introduces a game-changing feature for user engagement.",
      image: "https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?s=2048x2048&w=is&k=20&c=dBl_-K7y6ZXcuma-djEqnSHXJ5KU1Lw2pz6MAVY4RUQ=",
      imageAlt: "Twitter feature image"
    },
    {
      icon: "https://img.icons8.com/color/4800/youtube-play.png",
      iconAlt: "youtube-play",
      mention: "Mention of Youtube in Appsumo. 3 hours ago",
      title: "Chat Pixel Review : appsumo Lifetime Deal Worth Your Money?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Category image"
    },
    {
      icon: "https://img.icons8.com/color/4800/twitter.png",
      iconAlt: "twitter",
      mention: "Mention of Twitter in TechCrunch. 5 hours ago",
      title: "Twitter's New Feature: What You Need to Know",
      description: "Twitter introduces a game-changing feature for user engagement.",
      image: "https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?s=2048x2048&w=is&k=20&c=dBl_-K7y6ZXcuma-djEqnSHXJ5KU1Lw2pz6MAVY4RUQ=",
      imageAlt: "Twitter feature image"
    },

  

  
    // ... more objects as needed
  ]
  return (
    <div className='bg-gray-900'>
<CategorySelector data={apiData} />
      {/* <Hero /> */}
    </div>
  );
};

export default HomePage;