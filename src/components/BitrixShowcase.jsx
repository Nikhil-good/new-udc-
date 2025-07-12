import React, { useState } from 'react';
import './BitrixShowcase.css';
import {
  FaUsers,
  FaCheckCircle,
  FaBullhorn,
  FaBook,
  FaHandshake,
  FaVideo,
  FaUserTie,
  FaFolderOpen,
  FaCogs,
} from 'react-icons/fa';

const bitrixOptions = [
  {
    icon: <FaHandshake />,
    label: 'CRM & Sales',
    image: `${import.meta.env.BASE_URL}assets/crm.png`,
  },
  {
    icon: <FaUsers />,
    label: 'Workgroups',
    image: `${import.meta.env.BASE_URL}assets/workgroup.jpg`,
  },
  {
    icon: <FaCheckCircle />,
    label: 'Task Management',
    image: `${import.meta.env.BASE_URL}assets/tasks_and_projects-main.png`,
  },
  {
    icon: <FaBullhorn />,
    label: 'Marketing',
    image: `${import.meta.env.BASE_URL}assets/marketing.jpg`,
  },
  {
    icon: <FaBook />,
    label: 'Knowledge Base',
    image: `${import.meta.env.BASE_URL}assets/knowledge_base.jpg`,
  },
  {
    icon: <FaVideo />,
    label: 'Online Meetings',
    image: `${import.meta.env.BASE_URL}assets/online meeting.jpg`,
  },
  {
    icon: <FaUserTie />,
    label: 'HR Tools',
    image: `${import.meta.env.BASE_URL}assets/HR.jpg`,
  },
  {
    icon: <FaFolderOpen />,
    label: 'Document Drive',
    image: `${import.meta.env.BASE_URL}assets/drive.jpg`,
  },
  {
    icon: <FaCogs />,
    label: 'Automation',
    image: `${import.meta.env.BASE_URL}assets/automation.jpg`,
  },
];

const BitrixShowcase = ({ onOpenForm }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bitrix-showcase-wrapper">
      {/* Background Blur Image */}
      <img
        src={`${import.meta.env.BASE_URL}assets/bitrix24-blur.jpg`}
        alt="Blurred Bitrix24"
        className="background-blur"
      />

      {/* Active Hover Feature Image */}
      {hovered !== null && (
        <img
          src={bitrixOptions[hovered].image}
          alt="Clear feature"
          className="feature-highlight"
        />
      )}

      {/* Floating Panel */}
      <div className="tile-panel">
        <h6 className="fw-bold mb-3">Manage your business with Bitrix24</h6>

        <div className="tile-grid">
          {bitrixOptions.map((item, i) => (
            <div
              key={i}
              className="tile"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="tile-icon text-primary fs-4">{item.icon}</div>
              <small className="fw-medium">{item.label}</small>
            </div>
          ))}
        </div>

        {/* ✅ Popup Trigger */}
        <button
          className="start-btn mt-4"
          onClick={() => onOpenForm?.("BitrixShowcase")}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default BitrixShowcase;
