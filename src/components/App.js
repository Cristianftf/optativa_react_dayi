import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/404'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/exercise" element={<ExercisesContainer />} />
            <Route path="/exercise/new" element={<ExerciseNewContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default App
