import React from 'react';
import { Text } from 'react-native';

export enum Icons {
  MaterialIcons = 'MaterialIcons',
}

interface IconProps {
  type: Icons;
  name: string;
  size: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color = '#000' }) => {
  // Map of Material Icons to their Unicode characters
  const materialIcons: { [key: string]: string } = {
    'expand-less': '▲',
    'expand-more': '▼',
    'bug-report': '🐛',
    'network-check': '📡',
    'wifi': '📶',
    'settings': '⚙️',
    'code': '💻',
    'analytics': '📊',
    'list': '📋',
    'search': '🔍',
    'info': 'ℹ️',
    'warning': '⚠️',
    'error': '❌',
    'check-circle': '✅',
    'refresh': '🔄',
    'close': '❌',
    'menu': '☰',
    'more-vert': '⋮',
    'add': '➕',
    'remove': '➖',
    'edit': '✏️',
    'delete': '🗑️',
    'visibility': '👁️',
    'visibility-off': '👁️‍🗨️',
    'download': '⬇️',
    'upload': '⬆️',
    'cloud': '☁️',
    'cloud-done': '☁️✅',
    'cloud-off': '☁️❌',
    'sync': '🔄',
    'sync-problem': '🔄❌',
    'history': '⏱️',
    'schedule': '📅',
    'timer': '⏰',
    'hourglass-empty': '⌛',
    'hourglass-full': '⏳',
    'speed': '⚡',
    'speed-off': '⚡❌',
    'traffic': '🚦',
    'router': '📡',
    'dns': '🌐',
    'storage': '💾',
    'memory': '🧠',
    'developer-mode': '👨‍💻',
    'devices': '📱',
    'device-unknown': '❓',
    'devices-other': '📱+',
    'security': '🔒',
    'vpn-lock': '🔐',
    'verified-user': '✓',
    'report-problem': '⚠️',
    'help': '❓',
    'help-outline': '❔',
    'feedback': '💬',
    'support': '🆘',
    'priority-high': '❗',
    'low-priority': '⏬',
    'star': '⭐',
    'star-border': '☆',
    'star-half': '⭐½',
    'favorite': '❤️',
    'favorite-border': '🤍',
    'bookmark': '🔖',
    'bookmark-border': '📑',
    'flag': '🚩',
    'flag-outline': '🏳️',
    'share': '📤',
    'link': '🔗',
    'link-off': '🔗❌',
    'open-in-new': '↗️',
    'launch': '🚀',
    'exit-to-app': '↪️',
    'settings-backup-restore': '💾↩️',
    'restore': '↩️',
    'restore-page': '📄↩️',
    'backup': '💾',
    'cloud-upload': '☁️⬆️',
    'cloud-download': '☁️⬇️',
    'cloud-sync': '☁️🔄',
    'cloud-queue': '☁️⏳',
    'cloud-error': '☁️❌',
    'cloud-circle': '☁️⭕',
  };

  return (
    <Text style={{ fontSize: size, color }}>{materialIcons[name] || '❓'}</Text>
  );
};

export default Icon;
