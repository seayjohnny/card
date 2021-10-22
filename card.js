#!/usr/bin/env node

import * as f from "./format.js"

const data = {
    name: 'Johnny Seay',
    email: 'seay.johnny@gmail.com',
    location: "Fort Worth, Texas",
    title: 'Full Stack Software Engineer',
    company: 'Decision Analyst, Inc.',
    education: "B.S. in Mathematics",
    concentration: "Systems Analysis",
    minor: "Computer Science",
    github: 'seayjohnny',
    urls: {
        website: 'https://johnny.seay.io',
        github: 'https://github.com/seayjohnny',
        linkedin: 'https://www.linkedin.com/in/johnny-seay-966097185/'
    },

}


const header = `${f.center(f.gb(data.name))}
${f.center(f.g(data.email))}
${f.center(f.b(data.location))}`

const work = `\tWork\t\t${f.bb(data.title)} @ ${f.b(data.company)}`
const edu = `
\tEducation\t${f.bb(data.education)}
\t\t\t${f.b("with a concentration in")} ${f.bb(data.concentration)}
\t\t\t${f.b("and a minor in")} ${f.bb(data.minor)}`

const languages = `
\tLanguages\t${f.gb('Python')}, ${f.yb('JavaScript/TypeScript')}, ${f.bb('C/C++')},
\t\t\t${f.ob('Java')}, ${f.gb('C#')}, ${f.bb('Dart')}, ${f.c('Bash', f.FgMagenta+f.Bright)}, ${f.bb('R')}, ${f.rb('Ruby')}${f.Reset}`

const frameworks = `
\tFrameworks \t${f.bb('Django')}
\tand Tools\t${f.FgBlue+f.Bright}DevOps
\t\t\tParallel Computing
\t\t\tHigh Performance Computing
\t\t\tGPU Programming and Visualizations
\t\t\tGame Development${f.Reset}`

const interests = `
\tInterests\t${f.FgBlue+f.Bright}Full Stack Development
\t\t\tDevOps
\t\t\tParallel Computing
\t\t\tHigh Performance Computing
\t\t\tGPU Programming and Visualizations
\t\t\tGame Development${f.Reset}`

const web = `\tWebsite\t\t${f.url(data.urls.website)}`
const github = `\tGithub\t\t${f.url(data.urls.github)}`
const linkedin = `\tLinkedIn\t${f.url(data.urls.linkedin)}`

const output = `
${header}

${work}
${edu}
${languages}
${frameworks}
${interests}

${web}
${github}
${linkedin}
`;


console.clear()
console.log(output)
