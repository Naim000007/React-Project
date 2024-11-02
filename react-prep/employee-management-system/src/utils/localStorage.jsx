const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Design homepage layout",
                "description": "Create a modern and responsive homepage layout.",
                "date": "2024-02-20",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update client database",
                "description": "Review and update entries in the client database.",
                "date": "2024-02-18",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Prepare project proposal",
                "description": "Draft a proposal for the upcoming project with necessary details.",
                "date": "2024-02-15",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Conduct code review",
                "description": "Review codebase and identify potential bugs.",
                "date": "2024-02-20",
                "category": "Code Review"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Fix UI bugs",
                "description": "Address minor issues in the user interface.",
                "date": "2024-02-18",
                "category": "Bug Fixing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Write API documentation",
                "description": "Create clear documentation for the API endpoints.",
                "date": "2024-02-22",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Plan team meeting",
                "description": "Schedule and set an agenda for the team meeting.",
                "date": "2024-02-21",
                "category": "Management"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Update product documentation",
                "description": "Add recent changes to the product's documentation.",
                "date": "2024-02-25",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Organize files",
                "description": "Sort and organize project files for easy access.",
                "date": "2024-02-18",
                "category": "Organization"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Backup database",
                "description": "Ensure a full backup of the database is completed.",
                "date": "2024-02-19",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Analyze competitor sites",
                "description": "Research competitors and document their features.",
                "date": "2024-02-24",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Debug login feature",
                "description": "Identify and fix issues with the login feature.",
                "date": "2024-02-15",
                "category": "Bug Fixing"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Develop new feature",
                "description": "Create a new feature based on client requirements.",
                "date": "2024-02-26",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Fix footer bug",
                "description": "Address alignment issues in the footer section.",
                "date": "2024-02-20",
                "category": "Bug Fixing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Organize weekly report",
                "description": "Compile and summarize the team's weekly achievements.",
                "date": "2024-02-28",
                "category": "Reporting"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {

    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}




export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return { employees, admin }


}