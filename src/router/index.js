import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/ProjectIntroduce",
        },
        {
            path: '/ProjectIntroduce',
            component: () => import('../views/ProjectIntroduce')
        },
        {
            path: '/TeachersIntroduce',
            component: () => import('../views/TeachersIntroduce')
        },
        {
            path: '/ExperimentalGuide',
            component: () => import('../views/ExperimentalGuide')
        },
        {
            path: '/CourseMaterials',
            component: () => import('../views/CourseMaterials')
        },
        {
            path: '/ExperimentalResources',
            component: () => import('../views/ExperimentalResources')
        },
        {
            path: '/AssessmentRequirement',
            component: () => import('../views/AssessmentRequirement')
        },
        {
            path: '/ExcellentCase',
            component: () => import('../views/ExcellentCase')
        },
        {
            path: '/LearningRecord',
            component: () => import('../views/LearningRecord')
        },
        {
            path: '/QuestionsAnswers',
            component: () => import('../views/QuestionsAnswers')
        },
        {
            path: '/DataAnalysis',
            component: () => import('../views/DataAnalysis')
        },
        {
            path: '/CurriculumReview',
            component: () => import('../views/CurriculumReview')
        }
    ]
})