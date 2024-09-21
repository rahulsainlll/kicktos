"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  LayoutDashboard,
  Settings,
  PlusCircle,
  Search,
  FolderOpen,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description:
        "A groundbreaking initiative to revolutionize user experiences through innovative design and cutting-edge technology.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      title: "Project Beta",
      description:
        "Exploring the frontiers of artificial intelligence to create smarter, more intuitive software solutions.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      title: "Project Gamma",
      description:
        "Developing sustainable, eco-friendly products that make a positive impact on our planet and communities.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 4,
      title: "Project Delta",
      description:
        "Reimagining urban mobility with advanced transportation systems and smart city integration.",
      image: "/placeholder.svg?height=100&width=200",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-4">
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            href="#"
          >
            <LayoutDashboard className="mr-2" />
            Dashboard
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            href="#"
          >
            <User className="mr-2" />
            My Projects
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            href="#"
          >
            <FolderOpen className="mr-2" />
            Browse Projects
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            href="#"
          >
            <Settings className="mr-2" />
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Search and Create Project */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-auto">
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" /> Create Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Fill in the details for your new project. Click save when
                    you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Textarea id="description" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
