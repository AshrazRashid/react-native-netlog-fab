import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NetworkLogger from 'react-native-network-logger';

interface LoggerModalProps {
  visible: boolean;
  onClose: () => void;
  height?: number;
  theme?:
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
  sort?: 'asc' | 'desc';
  maxRows?: number;
  compact?: boolean;
  onBackPressed?: () => void;
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
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onBackPressed || onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { height: `${height * 100}%` }]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Network Logs</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
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
    backgroundColor: 'white',
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
    color: '#6200ee',
    fontSize: 16,
  },
});

export default LoggerModal;
