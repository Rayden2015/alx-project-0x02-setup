// Type definitions for the Splash App

// Base types for pets
export interface Dog {
  name: string;
  breed: string;
  age: number;
  bark(): string;
}

export interface Cat {
  name: string;
  breed: string;
  age: number;
  meow(): string;
}

export type Pet = Dog | Cat;

// User profile types
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Address {
  street: string;
  city: string;
  zipCode: string;
}

export interface Contact {
  phone: string;
  website: string;
}

export type UserProfile = User & Address & Contact;

// Status types
export type Status = 'loading' | 'success' | 'error';

// Conditional type example
export type IsString<T> = T extends string ? 'yes' : 'no';

// Utility type examples
export interface TestUser {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

// Type guards
export function isDog(pet: Pet): pet is Dog {
  return 'bark' in pet;
}

export function isCat(pet: Pet): pet is Cat {
  return 'meow' in pet;
}

// Generic types
export interface ApiResponse<T> {
  data: T;
  status: Status;
  message?: string;
}

// Decorator example
export function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
export class UserClass {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
