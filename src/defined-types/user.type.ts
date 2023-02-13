enum UserPlan{
    FREE = 'free',
    PREMIUM = 'premium',
}

export interface User {
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
