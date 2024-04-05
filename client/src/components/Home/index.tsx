import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  Package2Icon,
  BellIcon,
  HomeIcon,
  FileTextIcon,
  UsersIcon,
  SettingsIcon,
  CalendarIcon,
  UserIcon,
} from "@/lib/icons";

const Dashboard = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <FileTextIcon className="h-4 w-4" />
                Articles
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Users
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="p-4">
            <Card>
              <CardHeader>
                <CardTitle>Fact Checkers</CardTitle>
                <CardDescription>
                  Manage the team of fact checkers who review and verify
                  articles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  View Fact Checkers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link
            className="lg:hidden flex items-center gap-2 text-xl font-semibold"
            href="#"
          >
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-4 lg:ml-auto">
            <Link
              className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <FileTextIcon className="h-4 w-4" />
              Articles
            </Link>
            <Link
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-4 w-4" />
              Users
            </Link>
            <Link
              className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 ml-auto dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.jpg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="container flex flex-col gap-4 md:gap-8">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
                  Dashboard
                </h1>
                <Button className="ml-auto h-8" size="sm">
                  New Article
                </Button>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full aspect-square object-cover"
                        height="80"
                        src="/placeholder.jpg"
                        width="80"
                      />
                      <div className="grid gap-1.5">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4 opacity-50" />
                          <time className="text-sm font-medium opacity-70">
                            Today
                          </time>
                        </div>
                        <div className="flex items-center gap-2">
                          <UserIcon className="w-4 h-4 opacity-50" />
                          <span className="text-sm font-medium opacity-70">
                            John Doe
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                        How to spot fake news
                      </h1>
                      <p className="text-sm font-medium opacity-70">
                        This article has been fact-checked and verified by our
                        team of experts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Trending Articles</CardTitle>
                  <CardDescription>
                    The most popular articles on your site
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          How to spot fake news
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          5,231 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          The impact of social media on elections
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          4,912 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          Climate change: Fact or fiction?
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          4,129 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          The rise of AI: Boon or bane?
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          3,811 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          Vaccines: Miracle cure or health hazard?
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          3,621 views
                        </span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your website's latest updates and announcements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          New study reveals the impact of misinformation on
                          public opinion
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          5,231 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          The truth about conspiracy theories: Why people
                          believe in them
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          4,912 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          Fact Check: Debunking myths about COVID-19
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          4,129 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          The rise of AI: Boon or bane?
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          3,811 views
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-start gap-4 font-semibold"
                        href="#"
                      >
                        <span className="line-clamp-1">
                          Vaccines: Miracle cure or health hazard?
                        </span>
                        <span className="text-sm ml-auto shrink-0">
                          3,621 views
                        </span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
