import React from 'react';

export interface ServiceItem {
  title: string;
  icon: React.ComponentType<any>;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary', // WhatsApp Green
  SECONDARY = 'secondary', // Navy/Dark
  OUTLINE = 'outline'
}