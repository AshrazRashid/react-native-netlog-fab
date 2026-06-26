import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NetworkLogger from 'react-native-network-logger';

type LoggerTheme =
  | 'light'
  | 'dark'
  | {
      colors?: {
        background?: string;
        text?: string;
        border?: string;
        [key: string]: string | undefined;
      };
    };

interface LoggerModalProps {
  visible: boolean;
  onClose: () => void;
  height?: number;
  theme?: LoggerTheme;
  sort?: 'asc' | 'desc';
  maxRows?: number;
  compact?: boolean;
  onBackPressed?: () => void;
}

function getModalColors(theme: LoggerTheme) {
  if (theme === 'dark') {
    return {
      background: '#1e1e1e',
      text: '#ffffff',
      close: '#bb86fc',
    };
  }

  if (typeof theme === 'object' && theme.colors?.background) {
    return {
      background: theme.colors.background,
      text: theme.colors.text ?? '#000000',
      close: '#6200ee',
    };
  }

  return {
    background: '#ffffff',
    text: '#000000',
    close: '#6200ee',
  };
}

const LoggerModal: React.FC<LoggerModalProps> = ({
  visible,
  onClose,
  height = 0.7,
  theme = 'light',
  sort = 'desc',
  maxRows,
  compact = false,
  onBackPressed,
}) => {
  const colors = getModalColors(theme);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onBackPressed || onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent,
            { height: `${height * 100}%`, backgroundColor: colors.background },
          ]}
        >
          <View style={styles.header}>
            <Text style={[styles.headerText, { color: colors.text }]}>
              Network Logs
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={[styles.closeButtonText, { color: colors.close }]}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loggerContainer}>
            <NetworkLogger
              theme={theme}
              sort={sort}
              maxRows={maxRows}
              compact={compact}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 16,
  },
  loggerContainer: {
    flex: 1,
  },
});

export default LoggerModal;
