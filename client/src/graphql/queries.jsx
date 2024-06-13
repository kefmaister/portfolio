import { gql } from "@apollo/client";

export const GET_PROJECTS_DATA = gql`
  query GetAllProjects {
    projects {
      client {
        name
        smallLogo {
          url
        }
      }
      title
      description
      slug
      url
      github
      image {
        url
      }
      skillsets {
        name
        logo {
          url
        }
      }
    }
  }
`;

export const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($slug: String!) {
    project(where: { slug: $slug }) {
      client {
        name
        smallLogo {
          url
        }
      }
      title
      description
      slug
      url
      github
      image {
        url
      }
    }
  }
`;

export const GET_ALL_SKILLS = gql`
  query GetAllSkills {
    skillsets {
      level
      logo {
        url
      }
      name
    }
  }
`;
// export const GET_PROJECT_DETAIL = gql`
//   query GetProjectDetail($slug: String!) {
//     project(where: { slug: $slug }) {
//       creator
//       description
//       id
//       image {
//         url
//       }
//       name
//       program {
//         ... on Program {
//           id
//           course
//           semester
//           year
//           points
//         }
//       }
//       slug
//       content {
//         html
//       }
//     }
//   }
// `;

// export const GET_ALL_TEAM_MEMBERS = gql`
//   query GetAllTeamMembers {
//     teamMembers {
//       firstname
//       lastname
//       image {
//         url
//       }
//     }
//   }
// `;

// export const GET_ALL_BLOGS = gql`
//   query GetAllBlogs {
//     blogs {
//       content {
//         html
//       }
//       creator
//       description
//       name
//       image {
//         url
//       }
//       slug
//       tags {
//         name
//       }
//     }
//   }
// `;

// export const GET_BLOG_DETAIL = gql`
//   query GetBlogDetail($slug: String!) {
//     blog(where: { slug: $slug }) {
//       content {
//         html
//       }
//       creator
//       description
//       name
//       image {
//         url
//       }
//       slug
//     }
//   }
// `;

export const GET_SEARCH_DATA = gql`
  query GetSearchInfo($_search: String = "") {
    clients(where: { _search: $_search }) {
      name
    }
    projects(where: { _search: $_search }) {
      client {
        name
      }
      description
      skillsets {
        name
      }
      title
      slug
    }
    skillsets(where: { _search: $_search }) {
      name
    }
    services(where: { _search: $_search }) {
      title
      slug
    }
  }
`;

// export const GET_ALL_PROGRAMS = gql`
//   query GetAllPrograms {
//     programs(first: 25) {
//       course
//       points
//       projects {
//         slug
//       }
//       semester
//       year
//     }
//   }
// `;

export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    services {
      image {
        url
      }
      title
      description
      slug
    }
  }
`;

export const GET_SERVICE_DETAIL = gql`
  query GetServiceDetail($slug: String = "") {
    service(where: { slug: $slug }) {
      title
      image {
        url
      }
      description
      slug
    }
  }
`;
