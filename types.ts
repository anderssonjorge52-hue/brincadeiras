
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OrderBump {
  id: string;
  title: string;
  description: string;
  price: number;
}
