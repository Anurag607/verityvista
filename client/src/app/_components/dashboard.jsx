import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Component() {
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
                <CardDescription>Manage the team of fact checkers who review and verify articles</CardDescription>
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
          <Link className="lg:hidden flex items-center gap-2 text-xl font-semibold" href="#">
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
                  src="/placeholder.svg"
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
                <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl">Dashboard</h1>
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
                        src="/placeholder.svg"
                        width="80"
                      />
                      <div className="grid gap-1.5">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4 opacity-50" />
                          <time className="text-sm font-medium opacity-70">Today</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <UserIcon className="w-4 h-4 opacity-50" />
                          <span className="text-sm font-medium opacity-70">John Doe</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl">How to spot fake news</h1>
                      <p className="text-sm font-medium opacity-70">
                        This article has been fact-checked and verified by our team of experts.
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
                  <CardDescription>The most popular articles on your site</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">How to spot fake news</span>
                        <span className="text-sm ml-auto shrink-0">5,231 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">The impact of social media on elections</span>
                        <span className="text-sm ml-auto shrink-0">4,912 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">Climate change: Fact or fiction?</span>
                        <span className="text-sm ml-auto shrink-0">4,129 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">The rise of AI: Boon or bane?</span>
                        <span className="text-sm ml-auto shrink-0">3,811 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">Vaccines: Miracle cure or health hazard?</span>
                        <span className="text-sm ml-auto shrink-0">3,621 views</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your website's latest updates and announcements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4">
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">
                          New study reveals the impact of misinformation on public opinion
                        </span>
                        <span className="text-sm ml-auto shrink-0">5,231 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">
                          The truth about conspiracy theories: Why people believe in them
                        </span>
                        <span className="text-sm ml-auto shrink-0">4,912 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">Fact Check: Debunking myths about COVID-19</span>
                        <span className="text-sm ml-auto shrink-0">4,129 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">The rise of AI: Boon or bane?</span>
                        <span className="text-sm ml-auto shrink-0">3,811 views</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex items-start gap-4 font-semibold" href="#">
                        <span className="line-clamp-1">Vaccines: Miracle cure or health hazard?</span>
                        <span className="text-sm ml-auto shrink-0">3,621 views</span>
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
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
