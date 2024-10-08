"use client";
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  type Command,
  CommandMenu,
  CommandWrapper,
  type InnerCommand,
  useCommands,
  useKmenu,
} from "kmenu";
import { Github, Search, Twitter, Youtube } from "lucide-react";
import { type FC, useState } from "react";

import { defaultPostsConstants } from "../../../constants/post.constants.ts";

const CommandPalette: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [postSearchResults, setPostSearchResults] = useState<InnerCommand[]>(
    [],
  );
  const { setOpen, open } = useKmenu();

  const getPostsWithQuery = (query?: string): InnerCommand[] => {
    setSearchQuery(query ?? "");

    const filteredPosts = defaultPostsConstants.filter(
      (defaultPostsConstant) =>
        defaultPostsConstant.header
          .toLowerCase()
          .includes(query?.toLowerCase() ?? "") ||
        defaultPostsConstant.content
          .toLowerCase()
          .includes(query?.toLowerCase() ?? ""),
    );
    const commands = filteredPosts.map((post) => ({
      icon: <Search />,
      text: post.header,
      perform: () => {
        // handleSearch(post.header);
      },
    }));
    setPostSearchResults(commands);
    return commands;
  };

  const main: Command[] = [
    {
      category: "Search",
      commands: [
        {
          icon: <Search />,
          text: "Search",
          perform: () => {
            setOpen(2);
          },
        },
      ],
    },
    {
      category: "Social",
      commands: [
        {
          icon: <Twitter />,
          text: "Twitter",
        },
        {
          icon: <Github />,
          text: "Github",
        },
        {
          icon: <Youtube />,
          text: "Youtube",
        },
      ],
    },
  ];

  const posts: Command[] = [
    {
      category: "Posts",
      commands: postSearchResults,
    },
  ];

  const [mainCommands] = useCommands(main);
  const [postsCommands] = useCommands(posts);

  return (
    <CommandWrapper>
      <CommandMenu commands={mainCommands} crumbs={["Home"]} index={open} />
      <CommandMenu
        commands={postsCommands}
        crumbs={["Home", "Posts"]}
        index={2}
      />
    </CommandWrapper>
  );
};

export default CommandPalette;
