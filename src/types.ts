export type Language = 'en' | 'am' | 'om';

export interface ServiceItem {
  id: string;
  titleKey: string;
  category: 'emergency' | 'surgical' | 'maternal' | 'diagnostics' | 'specialized' | 'general';
  icon: string;
  image: string;
  capacity: string;
  availability: string;
  shortDescKey: string;
  fullDescKey: string;
  features: string[];
  headDoctor?: string;
  locationRoom?: string;
}

export interface NewsArticle {
  id: string;
  titleKey: string;
  categoryKey: string;
  date: string;
  authorKey: string;
  image: string;
  summaryKey: string;
  contentKey: string;
  readTime: string;
  featured?: boolean;
}

export interface AchievementItem {
  id: string;
  year: string;
  titleKey: string;
  descKey: string;
  category: 'infrastructure' | 'technology' | 'award' | 'community' | 'stem';
  image?: string;
}

export interface GalleryItem {
  id: string;
  titleKey: string;
  category: 'campus' | 'facilities' | 'stem' | 'community';
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
  captionKey: string;
}

export interface Testimonial {
  id: string;
  name: string;
  locationKey: string;
  roleKey: string;
  avatar: string;
  quoteKey: string;
  rating: number;
}

export interface TriageOption {
  id: string;
  labelKey: string;
  urgency: 'high' | 'medium' | 'low';
  recommendationKey: string;
}

export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  category: 'general' | 'appointment' | 'emergency' | 'stem';
}
