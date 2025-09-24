'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  User,
  Lock,
  GraduationCap,
  Users,
  BookOpen,
  UserCheck,
} from 'lucide-react';

interface Credential {
  role: string;
  username: string;
  password: string;
  color: string;
  icon: React.ReactNode;
}

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) router.push(`/${role}`);
  }, [user, router]);

  const [selectedCredential, setSelectedCredential] =
    useState<Credential | null>(null);

    const signInCardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (selectedCredential && signInCardRef.current) {
        signInCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [selectedCredential]);
    

  const credentials: Credential[] = [
    {
      role: 'Admin',
      username: 'admin1',
      password: 'Admin@2024!Pass',
      color: 'from-purple-600 to-purple-700',
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      role: 'Teacher',
      username: 'teacher',
      password: 'Teacher@2024!Pass',
      color: 'from-blue-600 to-blue-700',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      role: 'Parent',
      username: 'parent',
      password: 'Parent@2024!Pass',
      color: 'from-green-600 to-green-700',
      icon: <Users className="w-5 h-5" />,
    },
    {
      role: 'Student',
      username: 'student',
      password: 'Student@2024!Pass',
      color: 'from-orange-600 to-orange-700',
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      {/* background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>


      <div className="relative z-10 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left side */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                  School Management System
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A comprehensive school management system designed to streamline
                administrative tasks, enhance communication, and improve the
                educational experience.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* features */}
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Admin Dashboard
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Class Management
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Parent Portal
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Student Hub
                  </span>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="space-y-8">
              {/* demo creds */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Demo Credentials
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {credentials.map((credential, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCredential(credential)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                        selectedCredential?.role === credential.role
                          ? `bg-gradient-to-r ${credential.color} text-white border-transparent`
                          : 'bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        {credential.icon}
                        <span className="font-medium text-sm">
                          {credential.role}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                {selectedCredential && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Username:</span>
                        <span className="font-mono font-medium text-gray-900">
                          {selectedCredential.username}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Password:</span>
                        <span className="font-mono font-medium text-gray-900">
                          {selectedCredential.password}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Clerk Sign In */}
              <div 
              ref={signInCardRef}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <SignIn.Root>
                  <SignIn.Step
                    name="start"
                    className="space-y-6 flex flex-col"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Sign In
                      </h3>
                      <p className="text-gray-600 mt-2">Access your dashboard</p>
                    </div>

                    <Clerk.GlobalError className="text-sm text-red-400" />

                    <Clerk.Field
                      name="identifier"
                      className="flex flex-col gap-2"
                    >
                      <Clerk.Label className="text-xs text-gray-500">
                        Username
                      </Clerk.Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Clerk.Input
                          type="text"
                          value={selectedCredential?.username}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter username"
                        />
                      </div>
                      <Clerk.FieldError className="text-xs text-red-400" />
                    </Clerk.Field>

                    <Clerk.Field
                      name="password"
                      className="flex flex-col gap-2"
                    >
                      <Clerk.Label className="text-xs text-gray-500">
                        Password
                      </Clerk.Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Clerk.Input
                          type="password"
                          value={selectedCredential?.password}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter password"
                        />
                      </div>
                      <Clerk.FieldError className="text-xs text-red-400" />
                    </Clerk.Field>

                    <SignIn.Action
                      submit
                      className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                        selectedCredential
                          ? `bg-gradient-to-r ${selectedCredential.color} hover:shadow-lg`
                          : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg'
                      }`}
                    >
                      Sign In
                    </SignIn.Action>
                  </SignIn.Step>
                </SignIn.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
