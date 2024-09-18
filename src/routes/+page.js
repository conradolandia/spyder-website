import { metadata } from "$lib/store";
import { siteUrl, title, description, keywords, author } from "$lib/config";

// Content blocks
let frontPage = {
  props: {
    // Hero section buttons
    buttons: [],
    // Content blocks
    blocks: [
      // What is Spyder
      {
        id: "what-is-spyder-section",
        imgSrc: "/assets/media/banner.svg",
        background: "/assets/media/bg.svg",
        columns: false,
        divider: true,
        extraContent: {
          title: `Get the ease of use of Jupyter along with many advanced features
                  found in PyCharm and VSCode in a single programming environment`,
        },
      },

      // Interactive
      {
        id: "interactive-section",
        title: "Interactive programming built in",
        divider: true,
        border: false,
        content: {
          title: "Works the way scientists do",
          text: `<p>Data analysts, scientists and engineers require a lot of
                experimentation, quick feedback and short iteration cycles
                while programming. Spyder was built from the ground up
                around that workflow.</p>`
        },
        tabs: [
          {
            title: "Variable Explorer",
            isVideo: true,
            content: {
              videoSources: [
                {
                  src: "/assets/media/variable_explorer.mp4",
                },
              ],
              videoCaption: "Explore variables after execution",
            },
          },
          {
            title: "Help",
            isVideo: true,
            content: {
              videoSources: [
                {
                  src: "/assets/media/help.mp4",
                },
              ],
              videoCaption: "Get help for code you're working on with one click",
            }
          },
          {
            title: "Editor",
            isVideo: true,
            content: {
              videoSources: [
                {
                  src: "/assets/media/editor.mp4",
                },
              ],
              videoCaption: `Run code in line by line or in sections called "cells"`,
            },
          },
        ],
      },

      // Ecosystem
      {
        id: "pydata-section",
        title: "Seamless integration with the PyData ecosystem",
        divider: true,
        content: {
          title: `A perfect fit with the most popular scientific libraries`,
          text: `<p>Spyder includes out of the box integration with
                <a href="https://matplotlib.org/">Matplotlib</a>,
                <a href="https://pandas.pydata.org/">Pandas</a>
                and many other libraries to help you work more efficiently with them.</p>`
        },
        tabs: [
          {
            title: "Matplotlib",
            content: {
              text: "Browse all your plots in a single place",
              imgSrc: "/assets/media/matplotlib.webp",
              imgAlt: `Spyder plots pane displaying a 3D visualization in the main panel, with options above for saving, zooming or removing it, and a right panel with thumbnails of other previous plots`
            }
          },
          {
            title: "Pandas",
            content: {
              text: "Interact with the contents of your dataframes",
              imgSrc: "/assets/media/pandas.webp",
              imgAlt: `Spyder Variable Explorer pane showing a pandas dataframe containing weather observations in a "spreadsheet" style view, with multi-level index columns, per-column heatmaps and toolbar options for displaying and editing the data`
            }
          },
          {
            title: "Numpy",
            content: {
              text: `Explore and edit multi-dimensional arrays`,
              imgSrc: "/assets/media/numpy.webp",
              imgAlt: `Spyder Variable Explorer pane displaying a three-dimensional NumPy in a "spreadsheet" style view, with cell colors forming a heatmap of values and options to adjust the axis and index of the array slice`
            }
          },
          {
            title: "Conda",
            content: {
              text: `Work with multiple environments at once`,
              imgSrc: "/assets/media/conda.webp",
              imgAlt: `Spyder Consoles menu with the "New console in environment" submenu selected, showing a listing of Conda environments by name, type and Python version`
            }
          },
          {
            title: "Sympy",
            content: {
              text: `View rich symbolic expressions rendered with LaTeX`,
              imgSrc: "/assets/media/sympy.webp",
              imgAlt: `Spyder's IPython Console pane, showing individual lines of code constructing SymPy expressions, and several complex symbolic formulas rendered inline in publication-style rich mathematical notation`
            }
          },
        ],
      },

      // Growth
      {
        id: "growth-section",
        title: "Ready to take you to the next level",
        divider: true,
        content: {
          title: `Make a bigger impact with reusable research`,
          text: `<p>The software you write is critical for new scientific discoveries and engineering solutions. Spyder helps you move from single scripts to structured, reusable modules and packages without losing interactivity. It also includes powerful software development tools whenever you’re ready for them.</p>`
        },
        tabs: [
          {
            title: "Developer tools",
            content: {
              text: `Take advantage of real-time hints and help to improve your code`,
              imgSrc: "/assets/media/developer_tools.webp",
              imgAlt: `Spyder Editor pane, with several real-time code analysis warnings shown on different lines and the affected code underlined. A hovered-over warning is showing its associated message, while the Source menu is open to the left showing the "Underline errors and warnings" option enabled`
            }
          },
          {
            title: "Projects",
            content: {
              text: `Easily switch between projects and browse their files`,
              imgSrc: "/assets/media/projects.webp",
              imgAlt: `Spyder Editor pane showing the Projects pane to its left, listing the files and directories of a project in a tree-style layout`
            }
          },
          {
            title: "Code analysis",
            content: {
              text: `Get in-depth insight on issues and improvements with your code`,
              imgSrc: "/assets/media/code_analysis.webp",
              imgAlt: `Spyder Code Analysis pane showing the results for a file, including an overall score and a listing of errors, warnings, refactoring and convention issues; each has a name, code, line number and message`
            }
          },
          {
            title: "Code search",
            content: {
              text: `Quickly find uses of a variable or word across files`,
              imgSrc: "/assets/media/search.webp",
              imgAlt: `Spyder Find pane, showing an example search for a method name, buttons toggling search options, an exclude field listing various file extensions, a dropdown for search location and a count and list of results per-file, including the file name and path and the line, column and context for each result`
            }
          },
        ],
      },

      // Setup
      {
        id: "setup-section",
        title: "Simple install and update process",
        content: {
          title: `Install with a single click and be productive right away`,
          text: `<p>Spyder offers standalone installers to make it as easy and reliable as possible to get started and keep it up to date.</p>`
        },
        divider: true,
        imgSrc: `/assets/media/windows.webp`,
        buttons: [],
      },

      // Sponsors
      {
        id: "sponsors-section",
        title: "Sponsors",
        content: {
          title: `Spyder is funded thanks to the generous support of`,
          titleTag: 'h1'
        },
        divider: true,
        columns: false,
        boxed: true,
        extraContent: {
          title: "and the donations we have received from our users around the world through Open Collective:"
        },
        extraImage: "/assets/media/sponsors.svg",
        extraImageAlt: "Donate to our project",
        extraImageLink: "https://opencollective.com/spyder#support",
        innerColumns: [
          {
            imgSrc: "/assets/media/czi_light.svg",
            imgSrcDark: "/assets/media/czi_dark.svg",
            imgAlt: "Chan Zuckerberg Initiative logo",
            link: "https://chanzuckerberg.com/",
          },
          {
            imgSrc: "/assets/media/numfocus_lrg.png",
            link: "https://numfocus.org/",
            imgAlt: "NumFocus logo"
          },
        ],
      },

      // Learn more
      {
        id: "learn-more-section",
        columns: false,
        boxed: true,
        background: "/assets/media/bg_more.svg",
        backgroundDark: "/assets/media/bg_more_dark.svg",
        innerColumns: [
          {
            title: "YouTube",
            content: "Learn more",
            icon: "BsYoutube",
            link: "https://www.youtube.com/c/spyderide",
            aspect: "xl:aspect-square",
          },
          {
            title: "Documentation",
            content: "Read the docs",
            icon: "BsBookHalf",
            link: "https://docs.spyder-ide.org",
            aspect: "xl:aspect-square",
          },
          {
            title: "GitHub",
            content: "Check out the source",
            icon: "BsGithub",
            link: "https://github.com/spyder-ide/spyder",
            aspect: "xl:aspect-square",
          },
          {
            title: "Donations",
            content: "Show your support",
            icon: "BsHeartFill",
            link: "https://opencollective.com/spyder",
            aspect: "xl:aspect-square",
          },
        ],
      },
    ],
  },
};

// Load content and process blocks
export function load() {
  // Set metadata for the home page
  metadata.setMetadata({
    title: `${title} | ${description}`,
    description,
    keywords: keywords.join(", "),
    author,
    url: siteUrl,
    image: `${siteUrl}/assets/media/website_screenshot.png`
  });

  return frontPage;
}
