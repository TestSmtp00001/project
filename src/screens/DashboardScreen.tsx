import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from '../components/common/Card';
import {Colors} from '../constants/Colors';
import {Spacing, FontSize, SCREEN_WIDTH} from '../constants/Dimensions';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  color: string;
  trend?: string;
}

interface MeetingItem {
  id: string;
  name: string;
  subject: string;
  date: string;
  duration: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color,
  trend,
}) => (
  <Card style={styles.metricCard}>
    <View style={styles.metricHeader}>
      <View style={styles.metricInfo}>
        <Text style={styles.metricTitle}>{title}</Text>
        <Text style={[styles.metricValue, {color}]}>{value}</Text>
        <Text style={styles.metricSubtitle}>{subtitle}</Text>
      </View>
      <Icon name={icon} size={32} color={color} />
    </View>
    {trend && (
      <View style={styles.trendContainer}>
        <Icon
          name="trending-up"
          size={16}
          color={Colors.success}
          style={styles.trendIcon}
        />
        <Text style={styles.trendText}>{trend}</Text>
      </View>
    )}
  </Card>
);

const DashboardScreen: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Weekly');

  const metrics = [
    {
      title: 'Deals Won',
      value: '32',
      subtitle: 'Total deals won',
      icon: 'trending-up',
      color: Colors.success,
      trend: '+12%',
    },
    {
      title: 'Win Rate',
      value: '30%',
      subtitle: 'Current win rate',
      icon: 'donut-small',
      color: Colors.blue,
      trend: '+8%',
    },
    {
      title: 'Meetings Completed',
      value: '101',
      subtitle: '74% of meetings booked',
      icon: 'event-available',
      color: Colors.blue,
      trend: '+15%',
    },
    {
      title: 'Meetings Recorded',
      value: '54',
      subtitle: '53% of meetings completed',
      icon: 'mic',
      color: Colors.yellow,
      trend: '+5%',
    },
  ];

  const meetings: MeetingItem[] = [
    {
      id: '1',
      name: 'John Smith',
      subject: 'Product Demo - Acme Corp',
      date: '2024-01-20',
      duration: '45 min',
    },
    {
      id: '2',
      name: 'Michael Johnson',
      subject: 'Discovery Call - TechStart',
      date: '2024-01-19',
      duration: '30 min',
    },
    {
      id: '3',
      name: 'Sarah Wilson',
      subject: 'Negotiation - Global Solutions',
      date: '2024-01-18',
      duration: '60 min',
    },
  ];

  const renderMeetingItem = ({item}: {item: MeetingItem}) => (
    <TouchableOpacity style={styles.meetingItem}>
      <View style={styles.meetingInfo}>
        <Text style={styles.meetingName}>{item.name}</Text>
        <Text style={styles.meetingSubject}>{item.subject}</Text>
        <Text style={styles.meetingDate}>{item.date} • {item.duration}</Text>
      </View>
      <Icon name="chevron-right" size={24} color={Colors.gray} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <Text style={styles.headerDate}>Sunday, March 31, 2024</Text>
        </View>

        {/* Time Range Selector */}
        <View style={styles.timeRangeContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Today', 'Daily', 'Weekly', 'Monthly', 'Quarterly'].map(range => (
              <TouchableOpacity
                key={range}
                style={[
                  styles.timeRangeButton,
                  selectedTimeRange === range && styles.timeRangeButtonActive,
                ]}
                onPress={() => setSelectedTimeRange(range)}>
                <Text
                  style={[
                    styles.timeRangeText,
                    selectedTimeRange === range && styles.timeRangeTextActive,
                  ]}>
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Metrics Grid */}
        <View style={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </View>

        {/* Recent Meetings */}
        <Card style={styles.meetingsCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Meetings</Text>
            <TouchableOpacity>
              <Icon name="filter-list" size={24} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={meetings}
            renderItem={renderMeetingItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: Spacing.lg,
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontSize: FontSize.xxl,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  headerDate: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  timeRangeContainer: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  timeRangeButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    marginRight: Spacing.sm,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
  },
  timeRangeButtonActive: {
    backgroundColor: Colors.primary,
  },
  timeRangeText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  timeRangeTextActive: {
    color: Colors.white,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.lg,
    justifyContent: 'space-between',
  },
  metricCard: {
    width: (SCREEN_WIDTH - Spacing.lg * 3) / 2,
    marginBottom: Spacing.md,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  metricInfo: {
    flex: 1,
  },
  metricTitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  metricValue: {
    fontSize: FontSize.xxl,
    fontWeight: 'bold',
    marginBottom: Spacing.xs,
  },
  metricSubtitle: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  trendIcon: {
    marginRight: Spacing.xs,
  },
  trendText: {
    fontSize: FontSize.sm,
    color: Colors.success,
    fontWeight: '600',
  },
  meetingsCard: {
    margin: Spacing.lg,
    marginTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.text,
  },
  meetingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  meetingInfo: {
    flex: 1,
  },
  meetingName: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  meetingSubject: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  meetingDate: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
});

export default DashboardScreen;