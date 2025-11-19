import { useState, useEffect, useRef } from "react";
import "./Timeline.css";

function TimelineEvent({ event, row, col, onClick, isVisited, eventRef }) {
  return (
    <div
      ref={eventRef}
      className="timeline-event"
      style={{
        gridRow: row + 1,
        gridColumn: col + 1,
      }}
      onClick={onClick}
    >
      <div className={`event-circle ${isVisited ? "visited" : ""}`}></div>
      <div className="event-info">
        <div className="event-label">
          <div className="event-title">{event.title}</div>
          <div className="event-date">{event.date}</div>
        </div>
      </div>
    </div>
  );
}

function Modal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{event.title}</h2>
        <p className="modal-year">{event.date}</p>
        <p className="modal-description">{event.description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visitedIndex, setVisitedIndex] = useState(-1);
  const [linePositions, setLinePositions] = useState([]);
  const eventRefs = useRef([]);
  const containerRef = useRef(null);

  const timelineEvents = [
    {
      id: 1,
      title: "First Facial Recognition Measurements",
      description:
        "Woodrow Wilson Bledsoe creates a system for manually measuring facial features, founding the basis for automated facial recognition.",
      date: "1960s",
    },
    {
      id: 2,
      title: "Law Enforcement Interest",
      description:
        "US law enforcement and government agencies begin funding research in face recognition and biometric identification.",
      date: "1967",
    },
    {
      id: 3,
      title: "Eigenfaces Invented",
      description:
        "Sirovich and Kirby introduce “Eigenfaces,” enabling mathematical facial representation using principal component analysis.",
      date: "1988",
    },
    {
      id: 4,
      title: "Automated Face Detection Breakthrough",
      description:
        "Turk and Pentland implement the Eigenface method for the first automatic face detection in images.",
      date: "1991",
    },
    {
      id: 5,
      title: "FERET Program Launch",
      description:
        "DARPA and the Army Research Lab start the FERET program to standardize and benchmark face recognition algorithms.",
      date: "1993",
    },
    {
      id: 6,
      title: "Creation of Facial Recognition Database",
      description:
        "The US Department of Defense and NIST fund the largest facial recognition dataset for advancing surveillance applications.",
      date: "1996",
    },
    {
      id: 7,
      title: "Viola-Jones Algorithm Enables Real-Time Detection",
      description:
        "The Viola-Jones algorithm makes real-time face detection in video possible and is tested at Super Bowl XXXV.",
      date: "2001",
    },
    {
      id: 8,
      title: "Commercial Use in Airports and Casinos",
      description:
        "Facial recognition becomes commercially available for use in security at airports, casinos, and by government agencies.",
      date: "Early 2000s",
    },
    {
      id: 9,
      title: "Facial Recognition Confirms Bin Laden's Identity",
      description:
        "Facial recognition technology is used to help confirm the identity of Osama bin Laden after his death.",
      date: "2011",
    },
    {
      id: 10,
      title: "DeepFace Launch by Facebook",
      description:
        "Facebook applies deep learning for automatic photo-tagging with the launch of the DeepFace system.",
      date: "2014",
    },
    {
      id: 11,
      title: "Project Green Light Detroit",
      description:
        "Detroit Police deploy real-time facial recognition and high-definition surveillance cameras, sparking debate over racial surveillance.",
      date: "2016",
    },
    {
      id: 12,
      title: "Gender Shades Project Exposes Bias",
      description:
        "The “Gender Shades” study reveals significant racial and gender bias in commercial facial recognition, prompting industry reform efforts.",
      date: "2018",
    },
    {
      id: 13,
      title: "First Citywide Ban (San Francisco)",
      description:
        "San Francisco becomes the first major US city to ban the use of facial recognition technology by city agencies and police.",
      date: "2019",
    },
    {
      id: 14,
      title: "Tech Giants Pause Police Facial Recognition",
      description:
        "IBM, Microsoft, and Amazon announce moratoria on police use of facial recognition due to bias and civil liberties concerns.",
      date: "2020",
    },
    {
      id: 15,
      title: "Ongoing Advances and Civil Rights Debate",
      description:
        "Deep learning methods drive breakthroughs in accuracy, but privacy and discrimination concerns fuel regulatory debates and public protests.",
      date: "2020s",
    },
  ];

  const getSnakePosition = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;

    const isReversedRow = row % 2 === 1;
    const actualCol = isReversedRow ? 2 - col : col;

    return { row, col: actualCol };
  };

  // Calculate line positions after render
  useEffect(() => {
    const calculateLinePositions = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const positions = [];

      for (let i = 0; i < timelineEvents.length - 1; i++) {
        const currentRef = eventRefs.current[i];
        const nextRef = eventRefs.current[i + 1];

        if (currentRef && nextRef) {
          const currentCircle = currentRef.querySelector(".event-circle");
          const nextCircle = nextRef.querySelector(".event-circle");

          if (currentCircle && nextCircle) {
            const currentRect = currentCircle.getBoundingClientRect();
            const nextRect = nextCircle.getBoundingClientRect();

            // Calculate center positions relative to container
            const x1 =
              currentRect.left + currentRect.width / 2 - containerRect.left;
            const y1 =
              currentRect.top + currentRect.height / 2 - containerRect.top;
            const x2 = nextRect.left + nextRect.width / 2 - containerRect.left;
            const y2 = nextRect.top + nextRect.height / 2 - containerRect.top;

            positions.push({ x1, y1, x2, y2, visited: i < visitedIndex });
          }
        }
      }

      setLinePositions(positions);
    };

    calculateLinePositions();
    window.addEventListener("resize", calculateLinePositions);

    return () => window.removeEventListener("resize", calculateLinePositions);
  }, [visitedIndex, timelineEvents.length]);

  const handleEventClick = (event, index) => {
    setSelectedEvent(event);
    setVisitedIndex(index);
  };

  return (
    <>
      <div className="timeline-content">
        <h1 className="timeline-main-title">Key Events</h1>
        <div className="timeline-wrapper-inner" ref={containerRef}>
          <svg className="timeline-lines">
            {linePositions.map((line, index) => (
              <line
                key={`line-${index}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                className={line.visited ? "line-visited" : "line-unvisited"}
              />
            ))}
          </svg>

          <div className="timeline-container">
            {timelineEvents.map((event, index) => {
              const { row, col } = getSnakePosition(index);
              return (
                <TimelineEvent
                  key={event.id}
                  event={event}
                  row={row}
                  col={col}
                  isVisited={index <= visitedIndex}
                  eventRef={(el) => (eventRefs.current[index] = el)}
                  onClick={() => handleEventClick(event, index)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
}
