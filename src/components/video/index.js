import React, { Component } from 'react'

import {connect} from 'react-redux'

const Video = ({activeLesson,activeModule}) => (
            <div>
                <strong>Modulo {activeLesson.title} </strong>
                <span>Aula {activeModule.title}</span>
            </div>
)


export default connect(state => ({
    activeLesson: state.activeLesson,
    activeModule: state.activeModule
}))(Video);