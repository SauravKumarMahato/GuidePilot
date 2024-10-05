import React from "react";
import Link from "next/link";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Activity, House, UserPen, Wallet, MessageSquare } from "lucide-react";

// let Options: string[] = ["Home", "Student Info. Management", "Fee Management", "Attendence"];

interface Dict {
  label: string;
  link: string;
}

let Options: Dict[] = [
  {
    label: "Home",
    link: "Home",
  },
  {
    label: "Student Info. Management",
    link: "SIM",
  },
  {
    label: "Fee Management",
    link: "FM",
  },
  {
    label: "Feedback to Student Record",
    link: "FSR",
  },
];

export function DefaultSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton
        variant="text"
        size="lg"
        onClick={openDrawer}
        className="ml-10"
      >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 p-4 flex items-center gap-4">
            <Activity color="#008e00" strokeWidth={1.8} size={50} />
            <Typography variant="h5" color="blue-gray">
              GuidePilot
            </Typography>
          </div>

          {/* Search Input */}
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>

          {/* List of Links */}
          <List>
            {Options.map((option) => (
              <Link href={`/${option.link}`} key={option.label}>
                <ListItem>
                  <ListItemPrefix>
                    {option.link === "Home" && (
                      <House color="#212121" strokeWidth={1.5} />
                    )}
                    {option.link === "SIM" && (
                      <UserPen color="#212121" strokeWidth={1.5} />
                    )}
                    {option.link === "FM" && (
                      <Wallet color="#212121" strokeWidth={1.5} />
                    )}
                    {option.link === "FSR" && (
                      <MessageSquare color="#212121" strokeWidth={1.5} />
                    )}
                  </ListItemPrefix>
                  {option.label}
                </ListItem>
              </Link>
            ))}
          </List>
        </Card>
      </Drawer>
    </>
  );
}
