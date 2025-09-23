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
