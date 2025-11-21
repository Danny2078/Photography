// Configuration file for Photography Room 7209 Booking System
// This file contains hashed credentials and system settings

const BookingConfig = {
    // Room information
    room: {
        number: '7209',
        floor: 7,
        name: 'Photography Room 7209'
    },
    
    // Time slots configuration
    timeSlots: [
        '09:00 - 11:00', 
        '11:00 - 13:00', 
        '13:00 - 15:00',
        '15:00 - 17:00', 
        '17:00 - 19:00', 
        '19:00 - 21:00'
    ],
    
    // Hashed teacher credentials (passwords are hashed for security)
    // To add new teachers, hash their passwords using the same method
    teacherHashes: {
        'Tia': '8f3b4e6d9a2c1f7e5b8a9d4c6f2e1a3b', // photo2024
        'Bryn': '7e2a8b5c9f1d6e3a7b4c8d5e9f2a1b6c', // room7209
        'ADMIN': '9a1b4e7c2f6d8a3b5e9c1f4d7a2e6b8c'  // photography123
    },
    
    // System settings
    settings: {
        maxBookingsPerUser: 3,
        advanceCancelHours: 24,
        sessionDurationHours: 2,
        storageKey: 'photographyRoom7209Bookings'
    },
    
    // Email configuration
    email: {
        subject: {
            confirmation: 'Photography Room 7209 Booking Confirmation',
            cancellation: 'Photography Room 7209 Booking Cancellation'
        },
        templates: {
            footer: 'Photography Room 7209 Booking System'
        }
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BookingConfig;
}
