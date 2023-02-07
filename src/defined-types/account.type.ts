export interface Account {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    isEmailConfirmed: boolean,
    dateCreated: string, 
    plan: UserPlan,
    isActive: boolean,
    isStaff: boolean
    
}