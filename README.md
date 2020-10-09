# Project Overview

## Project Name

Productive.ly

## Project Description

At Ferrous-Clad, we strive to help our customers experience their carpe diem. Our newest innovation, Productive.ly, will help the focused become more focused, the driven to become more driven and the productive to reach the upper echelons of their potential. Productive.ly is a productivity app with robust features which include a focus timer, a quick task list, a note storage and a built-in break button to help ease your tension throughout your busy day. Are you ready to carpe diem?

## Wireframes

Desktop Version
Click here to see: https://www.figma.com/file/4acf2CSmw9ifDLCrxK4euB/Productive.ly
![Desktop View](https://www.figma.com/file/4acf2CSmw9ifDLCrxK4euB/Productive.ly)

Tablet Version
Click here to see: https://www.figma.com/file/JNkSr9g0IeDbQO2LXiCc8D/Productive.ly-Tablet
![Tablet View](https://www.figma.com/file/JNkSr9g0IeDbQO2LXiCc8D/Productive.ly-Tablet)

Mobile Version
Click here to see: https://www.figma.com/file/VfNGHv9x6tRB99LxgaHfvI/Productive.ly-iPhone
![Mobile View](https://www.figma.com/file/VfNGHv9x6tRB99LxgaHfvI/Productive.ly-iPhone)

## Component Hierarchy

Click here to see: https://drive.google.com/file/d/1K9OeIURwTwvNm9sO-ydHgsfPhTrG2EsU/view?usp=sharing

## API and Data Sample

I will use airtable for users to add data to. Once the user uploads their name, Productive.ly will make an API call to display their name.
https://airtable.com/invite/l?inviteId=invtjjK54leZwEhgE&inviteToken=a15eff55047c8324efcf17a6776b347db7d2717d3bd2bebd58fe8de728bbc260

```
{
    "records": [
        {
            "id": "recAlUK66VcputfQJ",
            "fields": {
                "Status": "2020-10-08T21:16:55.000Z"
            },
            "createdTime": "2020-10-08T21:16:55.000Z"
        },
        {
            "id": "rec1FfTe8Fvl0y4ZQ",
            "fields": {
                "Status": "2020-10-08T21:16:55.000Z"
            },
            "createdTime": "2020-10-08T21:16:55.000Z"
        },
        {
            "id": "recMtZiFWJopAta0t",
            "fields": {
                "Status": "2020-10-08T21:16:55.000Z"
            },
            "createdTime": "2020-10-08T21:16:55.000Z"
        }
    ],
    "offset": "recMtZiFWJopAta0t"
}
```

### MVP/PostMVP

#### MVP

- Render a timer on screen that allows users to input a time
- Render a task list that allows users to add and remove list items
- Render a text area for notes that a user can add notes to
- Render a "take a break" button that takes user to a fun, upbeat video (OR stretching video)
- Connect Airtable API to the task list
- Connect Airtable to the notes

#### PostMVP

- Render a "Hello {user.name}" feature will will take an input from the user and then return the data from the API
- Render a weather display that shows the current forecast
- Render a Google Search bar that is active
- Render an inspirational quote from a secondary API
- Focus timer has an option to display time remaining in a percentage

## Project Schedule

| Day     | Deliverable                                        | Status     |
| ------- | -------------------------------------------------- | ---------- |
| Oct. 8  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| Oct. 9  | Project Approval / HTML / Basic CSS                | Incomplete |
| Oct. 11 | Pseudocode / Create Component Basic Structure      | Incomplete |
| Oct. 12 | Component structure / Connect API POST methods     | Incomplete |
| Oct. 13 | Fully functional app / More advanced styling       | Incomplete |
| Oct. 14 | MVP Fully complete / perfect styling               | Incomplete |
| Oct. 15 | Post MVPs                                          | Incomplete |
| Oct. 16 | Presentations                                      | Incomplete |

## Timeframes

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| HTML         |    M     |      1hrs      |     -----     |    -----    |
| Basic CSS    |    M     |      3hrs      |     -----     |    -----    |
| App.jsx      |    M     |      3hrs      |     -----     |    -----    |
| Name.jsx     |    M     |      3hrs      |     -----     |    -----    |
| Focus.jsx    |    M     |      3hrs      |     -----     |    -----    |
| Break.jsx    |    M     |      3hrs      |     -----     |    -----    |
| Tasks.jsx    |    M     |      3hrs      |     -----     |    -----    |
| Notes.jsx    |    M     |      3hrs      |     -----     |    -----    |
| Setup API DB |    M     |      3hrs      |     -----     |    -----    |
| API Calls    |    M     |      3hrs      |     -----     |    -----    |
| Rendering    |    M     |      3hrs      |     -----     |    -----    |
| Advanced CSS |    M     |      3hrs      |     -----     |    -----    |
| Polishing    |    M     |      3hrs      |     -----     |    -----    |
| Deployment   |    M     |      1hrs      |     -----     |    -----    |
| Debugging    |    M     |      3hrs      |     -----     |    -----    |
| Research     |    M     |      3hrs      |     -----     |    -----    |
| PostMVP      |    M     |      3hrs      |     -----     |    -----    |
| Total        |    H     |     46hrs      |     -----     |    -----    |

## SWOT Analysis

Link to a visual: https://drive.google.com/file/d/1QWMa7QawqCwcmTji5AyeoCRuymG57psh/view?usp=sharing

### Strengths:

- HTML
- CSS
- Making API Calls
- Basic class component structure

### Weaknesses:

- Difficulty in recognizing aspects of JSX structure
- Getting stuck in my own head
- Making a ternary button
- Sending, then receiving and API call back to back (never done this before)

### Opportunities:

- Get better at class components
- Learn useEffect/State at an operational level
- Leverage classmates’ wisdom
- Leverage outside sources
- Create an app I would want to use

### Threats:

- Not reaching out for help soon enough! (NO TOKENS!)
