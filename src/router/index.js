import VueRouter from 'vue-router'

import ProjectIntroduce from '../pages/ProjectIntroduce.vue'
import TeachersIntroduce from '../pages/TeachersIntroduce.vue'
import ExperimentalGuide from '../pages/ExperimentalGuide.vue'
import CourseMaterials from '../pages/CourseMaterials.vue'
import ExperimentalResources from '../pages/ExperimentalResources.vue'
import AssessmentRequirement from '../pages/AssessmentRequirement.vue'
import ExcellentCase from '../pages/ExcellentCase.vue'
import LearningRecord from '../pages/LearningRecord.vue'
import QuestionsAnswers from '../pages/QuestionsAnswers.vue'
import DataAnalysis from '../pages/DataAnalysis.vue'
import CurriculumReview from '../pages/CurriculumReview.vue'

export default new VueRouter({
    routes: [
        {
            path: '/ProjectIntroduce' || '/',
            component: ProjectIntroduce
        },
        {
            path: '/TeachersIntroduce',
            component: TeachersIntroduce
        },
        {
            path: '/ExperimentalGuide',
            component: ExperimentalGuide
        },
        {
            path: '/CourseMaterials',
            component: CourseMaterials
        },
        {
            path: '/ExperimentalResources',
            component: ExperimentalResources
        },
        {
            path: '/AssessmentRequirement',
            component: AssessmentRequirement
        },
        {
            path: '/ExcellentCase',
            component: ExcellentCase
        },
        {
            path: '/LearningRecord',
            component: LearningRecord
        },
        {
            path: '/QuestionsAnswers',
            component: QuestionsAnswers
        },
        {
            path: '/DataAnalysis',
            component: DataAnalysis
        },
        {
            path: '/CurriculumReview',
            component: CurriculumReview
        }
    ]
})