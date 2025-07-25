import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {Colors} from '../constants/Colors';
import {Spacing, FontSize} from '../constants/Dimensions';

interface TabItem {
  id: string;
  label: string;
  icon: string;
}

const MeetingIntelligenceScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transcript');
  const [searchText, setSearchText] = useState('');

  const tabs: TabItem[] = [
    {id: 'transcript', label: 'Transcript', icon: 'record-voice-over'},
    {id: 'summary', label: 'Summary', icon: 'summarize'},
    {id: 'followup', label: 'Follow-up', icon: 'send'},
    {id: 'analytics', label: 'Analytics', icon: 'analytics'},
    {id: 'coaching', label: 'Coaching', icon: 'school'},
    {id: 'asksam', label: 'Ask SAM', icon: 'psychology'},
  ];

  const transcriptData = [
    {
      id: '1',
      speaker: 'David Miller',
      timestamp: '00:15',
      content:
        'Good morning everyone, thank you for joining today\'s quarterly business review. I\'m excited to discuss our partnership opportunities.',
    },
    {
      id: '2',
      speaker: 'Jennifer Walsh',
      timestamp: '00:42',
      content:
        'Thanks David. We\'ve been really impressed with the results from our pilot program. The 23% efficiency improvement exceeded our expectations.',
    },
    {
      id: '3',
      speaker: 'David Miller',
      timestamp: '01:18',
      content:
        'That\'s fantastic to hear Jennifer. Based on those results, I\'d like to propose scaling this across your entire East Coast operations.',
    },
  ];

  const renderTranscriptItem = (item: any) => (
    <Card key={item.id} style={styles.transcriptItem}>
      <View style={styles.transcriptHeader}>
        <View style={styles.speakerInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {item.speaker
                .split(' ')
                .map((n: string) => n[0])
                .join('')}
            </Text>
          </View>
          <Text style={styles.speakerName}>{item.speaker}</Text>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Text style={styles.transcriptContent}>{item.content}</Text>
    </Card>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'transcript':
        return (
          <View style={styles.tabContent}>
            <View style={styles.searchContainer}>
              <Icon
                name="search"
                size={20}
                color={Colors.gray}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search transcript..."
                value={searchText}
                onChangeText={setSearchText}
                placeholderTextColor={Colors.gray}
              />
            </View>
            <ScrollView style={styles.transcriptList}>
              {transcriptData.map(renderTranscriptItem)}
            </ScrollView>
          </View>
        );
      case 'summary':
        return (
          <View style={styles.tabContent}>
            <Card>
              <Text style={styles.sectionTitle}>Meeting Summary</Text>
              <Text style={styles.summaryText}>
                Quarterly business review meeting to discuss partnership
                expansion. Review of successful pilot program results showing 23%
                efficiency improvement.
              </Text>
            </Card>
          </View>
        );
      case 'asksam':
        return (
          <View style={styles.tabContent}>
            <Card>
              <Text style={styles.sectionTitle}>Ask SAM</Text>
              <Text style={styles.summaryText}>
                Hello! I'm Sam, your AI sales assistant. I can help you analyze
                your meeting and provide insights.
              </Text>
              <View style={styles.chatInputContainer}>
                <TextInput
                  style={styles.chatInput}
                  placeholder="Ask me anything about your meeting..."
                  multiline
                  placeholderTextColor={Colors.gray}
                />
                <TouchableOpacity style={styles.sendButton}>
                  <Icon name="send" size={20} color={Colors.white} />
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        );
      default:
        return (
          <View style={styles.tabContent}>
            <Card>
              <Text style={styles.sectionTitle}>
                {tabs.find(tab => tab.id === activeTab)?.label}
              </Text>
              <Text style={styles.summaryText}>
                Content for {tabs.find(tab => tab.id === activeTab)?.label} tab
                will be displayed here.
              </Text>
            </Card>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meeting Intelligence</Text>
        <Text style={styles.headerSubtitle}>
          Jul 18, 10:45 - in field sales fan 1.mp4
        </Text>
      </View>

      {/* Audio Player */}
      <Card style={styles.audioPlayer}>
        <View style={styles.audioControls}>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-arrow" size={24} color={Colors.white} />
          </TouchableOpacity>
          <Text style={styles.audioTime}>1:22 / 6:04</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <TouchableOpacity>
            <Icon name="volume-up" size={20} color={Colors.gray} />
          </TouchableOpacity>
        </View>
      </Card>

      {/* Tab Navigation */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              activeTab === tab.id && styles.activeTab,
              tab.id === 'asksam' && styles.samTab,
              activeTab === tab.id && tab.id === 'asksam' && styles.activeSamTab,
            ]}
            onPress={() => setActiveTab(tab.id)}>
            <Icon
              name={tab.icon}
              size={20}
              color={
                activeTab === tab.id
                  ? tab.id === 'asksam'
                    ? Colors.secondary
                    : Colors.primary
                  : Colors.gray
              }
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === tab.id && styles.activeTabText,
                tab.id === 'asksam' && styles.samTabText,
                activeTab === tab.id &&
                  tab.id === 'asksam' &&
                  styles.activeSamTabText,
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab Content */}
      <View style={styles.contentContainer}>{renderTabContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: Spacing.lg,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: FontSize.xxl,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  headerSubtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  audioPlayer: {
    margin: Spacing.lg,
    marginBottom: Spacing.md,
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  audioTime: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginRight: Spacing.md,
    fontFamily: 'monospace',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.lightGray,
    borderRadius: 2,
    marginRight: Spacing.md,
  },
  progressFill: {
    width: '22%',
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  tabContainer: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    marginRight: Spacing.md,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  samTab: {
    backgroundColor: '#FFF4E6',
  },
  activeSamTab: {
    backgroundColor: Colors.secondary,
  },
  tabIcon: {
    marginRight: Spacing.xs,
  },
  tabText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.white,
  },
  samTabText: {
    color: Colors.secondary,
  },
  activeSamTabText: {
    color: Colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
  },
  tabContent: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.text,
  },
  transcriptList: {
    flex: 1,
  },
  transcriptItem: {
    marginBottom: Spacing.md,
  },
  transcriptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  speakerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  avatarText: {
    fontSize: FontSize.xs,
    color: Colors.white,
    fontWeight: 'bold',
  },
  speakerName: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.text,
  },
  timestamp: {
    fontSize: FontSize.xs,
    color: Colors.primary,
    fontFamily: 'monospace',
  },
  transcriptContent: {
    fontSize: FontSize.md,
    color: Colors.text,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  summaryText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: Spacing.lg,
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.text,
    maxHeight: 100,
    marginRight: Spacing.sm,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MeetingIntelligenceScreen;