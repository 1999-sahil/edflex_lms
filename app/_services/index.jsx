import request, { gql } from "graphql-request";

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master";

export const getCourseList = async() => {
    const query = gql`
    query CourseLists {
        courseLists {
          free
          id
          name
          author
          totalChapters
          banner {
            url
          }
          updatedAt
          tags
        }
      }
    `
  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id, userEmail) => {
  const query = gql`
  query CourseLists {
    courseList(where: {id: "`+id+`"}) {
      chapter (first: 30) {
        ... on Chapter {
          id
          name
          chapterNumber
          video {
            url
          }
        }
      }
      name
      id
      tags
      totalChapters
      free
      author
      description
    }
    userEnrollCourses(where: {courseId: "`+id+`", userEmail: "`+userEmail+`"}) {
      courseId
      userEmail
      id
      completedChapter {
        ... on CompletedChapter {
          chapterId
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
};

export const EnrollCourse = async(courseId, userEmail) => {
  const mutationQuery = gql`
  mutation EnrollCourse {
    createUserEnrollCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}
    ) {
      id
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const PublishCourse = async (id) => {
  const mutationQuery = gql`
  mutation EnrollCourse {
    publishUserEnrollCourse(where: {id: "`+id+`"}) {
      id
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const markChapterCompleted = async (recordId, chapterNumber) => {
  const mutationQuery = gql `
  mutation MyarkChapterCompleted {
    updateUserEnrollCourse(
      where: {id: "`+recordId+`"}
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+chapterNumber+`"}}}}}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};