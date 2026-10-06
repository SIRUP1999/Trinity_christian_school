'use client'

import { useEffect, useRef, useState } from 'react'

const programmes = [
  {
    id: 'ucmas',
    label: 'UCMAS',
    tagline: 'Mental Arithmetic & Abacus',
    colour: '#1a56db',
    accent: '#93c5fd',
    description: 'Building lightning-fast mental calculation skills using the ancient abacus method.',
    animation: 'ucmas',
  },
  {
    id: 'coding',
    label: 'Coding',
    tagline: 'Programming & Problem Solving',
    colour: '#059669',
    accent: '#6ee7b7',
    description: 'Learning to think logically and create with code from an early age.',
    animation: 'coding',
  },
  {
    id: 'robotics',
    label: 'Robotics',
    tagline: 'Engineering & Innovation',
    colour: '#7c3aed',
    accent: '#c4b5fd',
    description: 'Designing, building, and programming robots that solve real-world problems.',
    animation: 'robotics',
  },
  {
    id: 'cyber',
    label: 'Cyber Security',
    tagline: 'Digital Safety & Ethical Hacking',
    colour: '#b45309',
    accent: '#fcd34d',
    description: 'Understanding how to protect systems, data, and people in the digital world.',
    animation: 'cyber',
  },
]

const equations = [
  { a: 47, b: 38, op: '+', result: 85 },
  { a: 93, b: 27, op: '−', result: 66 },
  { a: 12, b: 9, op: '×', result: 108 },
  { a: 144, b: 12, op: '÷', result: 12 },
]

// --- UCMAS animation: abacus beads counting ---
function UCMASAnimation() {
  const [count, setCount] = useState(0)
  const [equation, setEquation] = useState(0)

  useEffect(() => {
    const eq = equations[equation % equations.length]
    setCount(0)
    const target = eq.result
    const step = Math.ceil(target / 30)
    const timer = setInterval(() => {
      setCount((c) => {
        if (c + step >= target) { clearInterval(timer); return target }
        return c + step
      })
    }, 40)
    return () => clearInterval(timer)
  }, [equation])

  useEffect(() => {
    const t = setInterval(() => setEquation((e) => e + 1), 3200)
    return () => clearInterval(t)
  }, [])

  const eq = equations[equation % equations.length]
  const rows = [5, 8, 6, 9, 7]

  return (
    <div className='sp-anim-wrap'>
      <div className='sp-abacus'>
        {rows.map((beads, ri) => (
          <div key={ri} className='sp-abacus-row'>
            <div className='sp-abacus-rod' />
            {Array.from({ length: 10 }).map((_, bi) => (
              <div
                key={bi}
                className='sp-bead'
                style={{
                  background: bi < beads ? '#1a56db' : '#dbeafe',
                  transform: bi < beads ? 'scale(1)' : 'scale(0.85)',
                  transition: `all ${0.2 + bi * 0.04}s ease`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className='sp-equation'>
        <span className='sp-eq-part'>{eq.a}</span>
        <span className='sp-eq-op'>{eq.op}</span>
        <span className='sp-eq-part'>{eq.b}</span>
        <span className='sp-eq-op'>=</span>
        <span className='sp-eq-result' style={{ color: '#1a56db' }}>{count}</span>
      </div>
    </div>
  )
}

// --- Coding animation: typewriter ---
const codeLines = [
  { text: 'def greet(name):', indent: 0, color: '#60a5fa' },
  { text: '  message = "Hello, " + name', indent: 1, color: '#6ee7b7' },
  { text: '  return message', indent: 1, color: '#6ee7b7' },
  { text: '', indent: 0, color: '' },
  { text: 'students = ["Ama", "Kofi", "Abena"]', indent: 0, color: '#fcd34d' },
  { text: 'for student in students:', indent: 0, color: '#60a5fa' },
  { text: '  print(greet(student))', indent: 1, color: '#6ee7b7' },
]
const fullCodeText = codeLines.map((line) => line.text).join('\n')

function CodingAnimation() {
  const [visibleChars, setVisibleChars] = useState(0)

  useEffect(() => {
    setVisibleChars(0)
    const timer = setInterval(() => {
      setVisibleChars((c) => {
        if (c >= fullCodeText.length) { clearInterval(timer); return c }
        return c + 2
      })
    }, 35)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const restart = setInterval(() => setVisibleChars(0), 6000)
    return () => clearInterval(restart)
  }, [])

  let charsUsed = 0
  return (
    <div className='sp-anim-wrap'>
      <div className='sp-code-window'>
        <div className='sp-code-titlebar'>
          <span className='sp-dot' style={{ background: '#ff5f57' }} />
          <span className='sp-dot' style={{ background: '#febc2e' }} />
          <span className='sp-dot' style={{ background: '#28c840' }} />
          <span className='sp-code-filename'>hello_world.py</span>
        </div>
        <div className='sp-code-body'>
          {codeLines.map((line, li) => {
            const lineStart = charsUsed
            charsUsed += line.text.length + (li < codeLines.length - 1 ? 1 : 0)
            const visible = Math.max(0, Math.min(line.text.length, visibleChars - lineStart))
            if (visibleChars < lineStart) return null
            return (
              <div key={li} className='sp-code-line'>
                <span className='sp-line-num'>{li + 1}</span>
                <span style={{ color: line.color || '#e2e8f0' }}>
                  {line.text.slice(0, visible)}
                  {visible < line.text.length && visibleChars >= lineStart && (
                    <span className='sp-cursor' />
                  )}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// --- Robotics animation: circuit nodes ---
function RoboticsAnimation() {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % 6), 600)
    return () => clearInterval(t)
  }, [])

  const nodes = [
    { x: 50, y: 15, label: 'CPU' },
    { x: 15, y: 45, label: 'SENSOR' },
    { x: 85, y: 45, label: 'MOTOR' },
    { x: 30, y: 78, label: 'POWER' },
    { x: 70, y: 78, label: 'SERVO' },
  ]

  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4],
  ]

  return (
    <div className='sp-anim-wrap'>
      <div className='sp-circuit'>
        <svg viewBox='0 0 100 95' className='sp-circuit-svg'>
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke={pulse === i ? '#c4b5fd' : '#4c1d95'}
              strokeWidth={pulse === i ? '1.5' : '0.8'}
              strokeDasharray={pulse === i ? '0' : '2 2'}
              style={{ transition: 'all 0.3s ease' }}
            />
          ))}
          {nodes.map((node, i) => (
            <g key={i}>
              <circle
                cx={node.x} cy={node.y} r={i === 0 ? 9 : 6.5}
                fill={i === 0 ? '#7c3aed' : '#4c1d95'}
                stroke={pulse % nodes.length === i ? '#c4b5fd' : '#6d28d9'}
                strokeWidth={pulse % nodes.length === i ? '2' : '1'}
                style={{ transition: 'all 0.3s ease' }}
              />
              <text
                x={node.x} y={node.y + 0.5}
                textAnchor='middle' dominantBaseline='middle'
                fontSize={i === 0 ? '3.5' : '2.8'}
                fill='#e9d5ff'
                fontFamily='monospace'
                fontWeight='bold'
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
        <div className='sp-robot-status'>
          <span className='sp-status-dot' style={{ background: '#7c3aed', animationDelay: '0s' }} />
          <span className='sp-status-dot' style={{ background: '#a78bfa', animationDelay: '0.2s' }} />
          <span className='sp-status-dot' style={{ background: '#c4b5fd', animationDelay: '0.4s' }} />
          <span className='sp-status-text'>System active</span>
        </div>
      </div>
    </div>
  )
}

// --- Cyber Security animation: matrix + lock ---
const chars = '01アイウエオカキクケコABCDEF#$%&'
function randomChar() { return chars[Math.floor(Math.random() * chars.length)] }

function CyberAnimation() {
  const [grid, setGrid] = useState(() =>
    Array.from({ length: 6 }, () => Array.from({ length: 10 }, randomChar))
  )
  const [secured, setSecured] = useState(false)
  const [lockScale, setLockScale] = useState(0)

  useEffect(() => {
    let ticks = 0
    const t = setInterval(() => {
      ticks++
      if (ticks > 18) {
        clearInterval(t)
        setSecured(true)
        setLockScale(1)
        setTimeout(() => { setSecured(false); setLockScale(0); ticks = 0 }, 3000)
        return
      }
      setGrid(Array.from({ length: 6 }, () => Array.from({ length: 10 }, randomChar)))
    }, 120)
    return () => clearInterval(t)
  }, [secured])

  return (
    <div className='sp-anim-wrap'>
      <div className='sp-cyber'>
        <div className='sp-matrix' style={{ opacity: secured ? 0.15 : 1, transition: 'opacity 0.5s' }}>
          {grid.map((row, ri) => (
            <div key={ri} className='sp-matrix-row'>
              {row.map((ch, ci) => (
                <span
                  key={ci}
                  className='sp-matrix-char'
                  style={{ color: (ri + ci) % 3 === 0 ? '#fcd34d' : '#b45309', opacity: 0.6 + Math.random() * 0.4 }}
                >
                  {ch}
                </span>
              ))}
            </div>
          ))}
        </div>
        {secured && (
          <div className='sp-lock-overlay' style={{ transform: `scale(${lockScale})`, transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}>
            <div className='sp-lock-icon'>🔒</div>
            <div className='sp-lock-label'>SECURED</div>
            <div className='sp-lock-sub'>All systems protected</div>
          </div>
        )}
      </div>
    </div>
  )
}

const animationMap = {
  ucmas: UCMASAnimation,
  coding: CodingAnimation,
  robotics: RoboticsAnimation,
  cyber: CyberAnimation,
}

export default function SpecialProgrammes() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const DURATION = 7000

  const startTimer = () => {
    clearInterval(intervalRef.current)
    setProgress(0)
    const start = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)
      if (elapsed >= DURATION) {
        setActive((a) => (a + 1) % programmes.length)
        clearInterval(intervalRef.current)
      }
    }, 30)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(intervalRef.current)
  }, [active])

  const current = programmes[active]
  const AnimComp = animationMap[current.animation]

  return (
    <section className='sp-section'>
      <div className='section-shell'>
        <div className='sp-header'>
          <p className='sp-eyebrow'>Beyond the classroom</p>
          <h2 className='sp-title'>Special Programmes</h2>
          <p className='sp-lead'>
            Giving every child the chance to discover a passion, develop a skill, and build a future.
          </p>
        </div>

        <div className='sp-tabs'>
          {programmes.map((p, i) => (
            <button
              key={p.id}
              type='button'
              className={`sp-tab${i === active ? ' sp-tab-active' : ''}`}
              style={i === active ? { '--tab-colour': p.colour } : {}}
              onClick={() => { setActive(i) }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className='sp-stage' style={{ '--stage-colour': current.colour, '--stage-accent': current.accent }}>
          <div className='sp-stage-left'>
            <p className='sp-stage-eyebrow'>{current.tagline}</p>
            <h3 className='sp-stage-title'>{current.label}</h3>
            <p className='sp-stage-desc'>{current.description}</p>
            <div className='sp-progress-bar'>
              <div className='sp-progress-fill' style={{ width: `${progress}%`, background: current.colour }} />
            </div>
            <div className='sp-nav-dots'>
              {programmes.map((p, i) => (
                <button
                  key={p.id}
                  type='button'
                  aria-label={`Show ${p.label}`}
                  className={`sp-nav-dot${i === active ? ' sp-nav-dot-active' : ''}`}
                  style={i === active ? { background: current.colour } : {}}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          <div className='sp-stage-right'>
            <AnimComp key={current.id} />
          </div>
        </div>
      </div>
    </section>
  )
}
