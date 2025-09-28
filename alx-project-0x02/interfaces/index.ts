// Common interfaces for the ALX Project 0x02 Setup

export interface WelcomeProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
}

export interface ProjectInfo {
  name: string;
  version: string;
  description: string;
  author: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}
