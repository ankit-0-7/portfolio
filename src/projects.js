/**
 * Portfolio projects live here so they can be updated without editing the page.
 * Add one object per project. Set links to your real repository/demo, or leave '' to hide that link.
 * Supported types: 'AI / ML', 'Full-stack', 'Data'. Icon names: BrainCircuit, Cpu,
 * Layers3, Sparkles, Database, Globe.
 */
export const projects = [
  {
    title: 'Xpense AI',
    type: 'Full-stack',
    desc: 'Full-stack expense tracker with 30-day spending forecasts, AI-written insights, alerts, and live multi-currency conversion.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Prophet', 'Llama 3', 'Groq API'],
    detail: 'Independent full-stack project with a separate Python forecasting service and live currency conversion.',
    outcomes: ['30-day spending forecasts from transaction history', 'Llama 3 insights and alerts via Groq', 'Live multi-currency conversion'],
    icon: 'Database',
    color: 'mint',
    code: '01',
    repo: '',
    demo: '',
  },
  {
    title: 'FluentFrames',
    type: 'AI / ML',
    desc: 'Presentation coaching app that analyses posture and speech pace, filler words, and pauses to produce delivery feedback.',
    stack: ['Python', 'Flask', 'OpenCV', 'TensorFlow', 'Librosa', 'Speech Recognition', 'Hugging Face'],
    detail: 'Team project: CNN-based posture classification, speech transcription and delivery metrics, with written feedback generated through an LLM API.',
    outcomes: ['CNN posture classification from video', 'Speech pace, filler-word, and pause analysis', 'LLM-generated feedback from extracted metrics'],
    icon: 'BrainCircuit',
    color: 'violet',
    code: '02',
    // Add this project's repository URL when ready
    repo: '',
    demo: '',
  },
];





