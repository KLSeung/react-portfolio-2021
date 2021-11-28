import { Grid } from '@material-ui/core';
import React from 'react';

import AlarmClockPic from '../../assets/Alarm_Clock.png';
import ChatBoxPic from '../../assets/ChatBox.png';
import RockPaperScissorsPic from '../../assets/Rock_Paper_Scissor.png';
import TinyAppPic from '../../assets/url_show.png';
import TodoAppPic from '../../assets/Todo_App.png';

import { MyWorksContainer, MyWorksImgContainer, MyWorksHeader, MyWorksDescription, MyWorksImgCard } from './styles'

export const MyWorks = () => {
  const projects = {
    Chatbox: {
      imagePath: ChatBoxPic,
      link: 'https://chatboxmessenger.netlify.app/',
      description: 'Chat Messenger Application created using the Socket.io API in order to send real-time messages with different users',
    },
    TodoApp: {
      imagePath: TodoAppPic,
      link: 'https://todo-app-498bf.web.app/',
      description: 'Simple Todo App built using Firebase for authentication and back-end database storage and React and Material UI for front-end components',
    },
    TinyApp: {
      imagePath: TinyAppPic,
      link: 'https://github.com/KLSeung/tinyapp',
      description: 'Web application built with Node and Express that allows users to shorten long URLs and track views on these URLs',
    },
    AlarmMe: {
      imagePath: AlarmClockPic,
      link: 'https://klseung.github.io/AlarmMe/',
      description: 'An alarm application which allows users to view the time and set an alarm which plays a user selected audio file'
    },
    RockPaperScissors: {
      imagePath: RockPaperScissorsPic,
      link: 'https://klseung.github.io/Rock-Paper-Scissor/',
      description: 'Simple Rock Paper Scissors game that the user can play against a CPU',
    },
  }

  return (
    <MyWorksContainer>
      <MyWorksHeader>My Works</MyWorksHeader>
      <Grid container spacing={4}>
        {
          Object.keys(projects).map((project, i) => {
            return (
              <Grid item key={'project' + i} xs={4}>
                <MyWorksImgContainer imgSrc={projects[project].imagePath}>
                  <MyWorksDescription>
                    <h3>{project}</h3>
                    <p>{projects[project].description}</p>
                  </MyWorksDescription>
                  <MyWorksImgCard />
                </MyWorksImgContainer>
              </Grid>
            )
          })
        }
      </Grid>
    </MyWorksContainer>
  )
}