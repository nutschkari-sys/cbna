// CBNA Landing Page - Modal System
// Handles all modal windows including forms, policies, and legal documents

// Modal Types Configuration
const MODAL_CONFIGS = {
    // Authentication Modals
    login: {
        title: 'Sign In',
        content: `
            <form id="loginForm" class="modal-form">
                <div class="form-group">
                    <label for="loginEmail">Email</label>
                    <input type="email" id="loginEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="loginPassword">Password</label>
                    <input type="password" id="loginPassword" name="password" required>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary btn-full">Sign In</button>
                </div>
                <div class="form-footer">
                    <a href="#" onclick="openModal('forgotPassword')">Forgot Password?</a>
                    <span>Don't have an account? <a href="#" onclick="openModal('signup')">Sign Up</a></span>
                </div>
            </form>
        `
    },
    
    signup: {
        title: 'Create Account',
        content: `
            <form id="signupForm" class="modal-form">
                <div class="form-group">
                    <label for="signupName">Full Name</label>
                    <input type="text" id="signupName" name="name" required>
                </div>
                <div class="form-group">
                    <label for="signupEmail">Email</label>
                    <input type="email" id="signupEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="signupCompany">Company</label>
                    <input type="text" id="signupCompany" name="company">
                </div>
                <div class="form-group">
                    <label for="signupPassword">Password</label>
                    <input type="password" id="signupPassword" name="password" required>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="signupTerms" name="terms" required>
                        <span class="checkmark"></span>
                        I agree to the <a href="#" onclick="openModal('terms')">Terms of Service</a> and <a href="#" onclick="openModal('privacy')">Privacy Policy</a>
                    </label>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary btn-full">Create Account</button>
                </div>
            </form>
        `
    },
    
    // Demo Modal
    demo: {
        title: 'Watch Demo',
        content: `
            <div class="demo-content">
                <div class="video-placeholder">
                    <svg width="400" height="225" viewBox="0 0 400 225" fill="none">
                        <rect width="400" height="225" rx="8" fill="#f3f4f6"/>
                        <circle cx="200" cy="112.5" r="40" fill="#2563eb" opacity="0.8"/>
                        <path d="M190 102L210 112.5L190 123V102Z" fill="white"/>
                        <text x="200" y="160" text-anchor="middle" fill="#6b7280" font-size="14" font-family="Inter">Demo Video</text>
                    </svg>
                </div>
                <div class="demo-info">
                    <h4>See CBNA in Action</h4>
                    <p>Watch how our cloud-based network architecture can transform your infrastructure with real-time scaling, security, and performance optimization.</p>
                    <div class="demo-features">
                        <div class="demo-feature">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 8L10 12L14 4" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Real-time monitoring</span>
                        </div>
                        <div class="demo-feature">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 8L10 12L14 4" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Auto-scaling demonstration</span>
                        </div>
                        <div class="demo-feature">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 8L10 12L14 4" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Security features overview</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    // Contact Modal
    contact: {
        title: 'Contact Sales',
        content: `
            <form id="contactSalesForm" class="modal-form">
                <div class="form-group">
                    <label for="contactName">Full Name</label>
                    <input type="text" id="contactName" name="name" required>
                </div>
                <div class="form-group">
                    <label for="contactEmail">Email</label>
                    <input type="email" id="contactEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="contactCompany">Company</label>
                    <input type="text" id="contactCompany" name="company" required>
                </div>
                <div class="form-group">
                    <label for="contactPhone">Phone</label>
                    <input type="tel" id="contactPhone" name="phone">
                </div>
                <div class="form-group">
                    <label for="contactSize">Company Size</label>
                    <select id="contactSize" name="size" required>
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="contactMessage">Message</label>
                    <textarea id="contactMessage" name="message" rows="4" placeholder="Tell us about your network infrastructure needs..."></textarea>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="contactConsent" name="consent" required>
                        <span class="checkmark"></span>
                        I consent to CBNA contacting me about their services
                    </label>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary btn-full">Send Message</button>
                </div>
            </form>
        `
    },
    
    // Legal Documents (Required for Google Ads)
    privacy: {
        title: 'Privacy Policy',
        content: `
            <div class="legal-content">
                <h3>Privacy Policy</h3>
                <p><strong>Last updated:</strong> January 1, 2024</p>
                
                <h4>1. Information We Collect</h4>
                <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:</p>
                <ul>
                    <li>Name and contact information</li>
                    <li>Company information</li>
                    <li>Usage data and analytics</li>
                    <li>Technical information about your network</li>
                </ul>
                
                <h4>2. How We Use Your Information</h4>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide and improve our services</li>
                    <li>Communicate with you</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                </ul>
                
                <h4>3. Information Sharing</h4>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                
                <h4>4. Data Security</h4>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                
                <h4>5. Your Rights</h4>
                <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
                
                <h4>6. Contact Us</h4>
                <p>If you have questions about this Privacy Policy, please contact us at privacy@cbna.com</p>
            </div>
        `
    },
    
    terms: {
        title: 'Terms of Service',
        content: `
            <div class="legal-content">
                <h3>Terms of Service</h3>
                <p><strong>Last updated:</strong> January 1, 2024</p>
                
                <h4>1. Acceptance of Terms</h4>
                <p>By accessing and using CBNA services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                
                <h4>2. Description of Service</h4>
                <p>CBNA provides cloud-based network architecture solutions including but not limited to network management, monitoring, and optimization services.</p>
                
                <h4>3. User Accounts</h4>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                
                <h4>4. Acceptable Use</h4>
                <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:</p>
                <ul>
                    <li>Use the service for any illegal purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the service</li>
                    <li>Violate any applicable laws or regulations</li>
                </ul>
                
                <h4>5. Service Availability</h4>
                <p>We strive to maintain high service availability but do not guarantee uninterrupted access. We may perform maintenance that temporarily affects service availability.</p>
                
                <h4>6. Limitation of Liability</h4>
                <p>CBNA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
                
                <h4>7. Termination</h4>
                <p>Either party may terminate this agreement with written notice. Upon termination, your access to the service will cease.</p>
                
                <h4>8. Contact Information</h4>
                <p>For questions about these Terms, contact us at legal@cbna.com</p>
            </div>
        `
    },
    
    cookies: {
        title: 'Cookie Policy',
        content: `
            <div class="legal-content">
                <h3>Cookie Policy</h3>
                <p><strong>Last updated:</strong> January 1, 2024</p>
                
                <h4>What Are Cookies</h4>
                <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.</p>
                
                <h4>How We Use Cookies</h4>
                <p>We use cookies for the following purposes:</p>
                <ul>
                    <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing cookies:</strong> Used for advertising and marketing purposes</li>
                </ul>
                
                <h4>Managing Cookies</h4>
                <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
                
                <h4>Third-Party Cookies</h4>
                <p>We may use third-party services that place their own cookies. These services have their own privacy policies.</p>
                
                <h4>Updates to This Policy</h4>
                <p>We may update this Cookie Policy from time to time. Please check back regularly for updates.</p>
            </div>
        `
    },
    
    gdpr: {
        title: 'GDPR Compliance',
        content: `
            <div class="legal-content">
                <h3>GDPR Compliance Statement</h3>
                <p><strong>Last updated:</strong> January 1, 2024</p>
                
                <h4>Your Rights Under GDPR</h4>
                <p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
                <ul>
                    <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Right to Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Right to Object:</strong> Object to processing of your data</li>
                    <li><strong>Right to Restriction:</strong> Limit how we process your data</li>
                </ul>
                
                <h4>Data Processing</h4>
                <p>We process your personal data based on the following legal grounds:</p>
                <ul>
                    <li>Consent you have given</li>
                    <li>Performance of a contract</li>
                    <li>Legitimate business interests</li>
                    <li>Legal obligations</li>
                </ul>
                
                <h4>Data Transfers</h4>
                <p>Your data may be transferred to countries outside the EEA. We ensure appropriate safeguards are in place for such transfers.</p>
                
                <h4>Data Retention</h4>
                <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in our Privacy Policy.</p>
                
                <h4>Contact Our DPO</h4>
                <p>For GDPR-related inquiries, contact our Data Protection Officer at dpo@cbna.com</p>
            </div>
        `
    },
    
    // Additional Modals
    about: {
        title: 'About CBNA',
        content: `
            <div class="about-content">
                <div class="about-section">
                    <h4>Our Mission</h4>
                    <p>CBNA is dedicated to revolutionizing network infrastructure through cloud-based solutions that provide scalability, security, and performance for modern enterprises.</p>
                </div>
                <div class="about-section">
                    <h4>Our Story</h4>
                    <p>Founded in 2020, CBNA emerged from the need for more flexible and scalable network solutions. Our team of experts has decades of combined experience in cloud computing and network architecture.</p>
                </div>
                <div class="about-section">
                    <h4>Our Values</h4>
                    <ul>
                        <li><strong>Innovation:</strong> Continuously pushing the boundaries of what's possible</li>
                        <li><strong>Security:</strong> Making security a fundamental part of everything we do</li>
                        <li><strong>Reliability:</strong> Ensuring our solutions work when you need them most</li>
                        <li><strong>Customer Focus:</strong> Putting our customers' success first</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    careers: {
        title: 'Join Our Team',
        content: `
            <div class="careers-content">
                <h4>Why Work at CBNA?</h4>
                <p>Join a team that's building the future of network infrastructure. We offer competitive benefits, flexible work arrangements, and opportunities for growth.</p>
                
                <div class="careers-benefits">
                    <h5>Benefits</h5>
                    <ul>
                        <li>Competitive salary and equity</li>
                        <li>Health, dental, and vision insurance</li>
                        <li>Flexible work arrangements</li>
                        <li>Professional development budget</li>
                        <li>Modern office with great amenities</li>
                    </ul>
                </div>
                
                <div class="careers-positions">
                    <h5>Open Positions</h5>
                    <div class="position-item">
                        <h6>Senior Network Engineer</h6>
                        <p>Help design and implement scalable network solutions for our enterprise customers.</p>
                    </div>
                    <div class="position-item">
                        <h6>Frontend Developer</h6>
                        <p>Build intuitive user interfaces for our network management platform.</p>
                    </div>
                    <div class="position-item">
                        <h6>DevOps Engineer</h6>
                        <p>Ensure our cloud infrastructure runs smoothly and efficiently.</p>
                    </div>
                </div>
                
                <div class="careers-contact">
                    <p>Interested in joining our team? Send your resume to <a href="mailto:careers@cbna.com">careers@cbna.com</a></p>
                </div>
            </div>
        `
    },
    
    blog: {
        title: 'CBNA Blog',
        content: `
            <div class="blog-content">
                <h4>Latest Insights</h4>
                <p>Stay updated with the latest trends in cloud networking and infrastructure.</p>
                
                <div class="blog-posts">
                    <article class="blog-post">
                        <h5>5 Trends Shaping Cloud Networking in 2024</h5>
                        <p class="post-meta">January 15, 2024 • 5 min read</p>
                        <p>Discover the key trends that will define cloud networking this year, from AI-driven optimization to enhanced security protocols.</p>
                    </article>
                    
                    <article class="blog-post">
                        <h5>How Auto-Scaling Improves Network Performance</h5>
                        <p class="post-meta">January 10, 2024 • 3 min read</p>
                        <p>Learn how automatic scaling can help your network handle traffic spikes and maintain optimal performance.</p>
                    </article>
                    
                    <article class="blog-post">
                        <h5>Security Best Practices for Cloud Networks</h5>
                        <p class="post-meta">January 5, 2024 • 7 min read</p>
                        <p>Essential security practices to protect your cloud-based network infrastructure from threats.</p>
                    </article>
                </div>
                
                <div class="blog-subscribe">
                    <h5>Subscribe to Our Newsletter</h5>
                    <p>Get the latest insights delivered to your inbox.</p>
                    <form class="subscribe-form">
                        <input type="email" placeholder="Enter your email" required>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
        `
    }
};

// Modal Management
let currentModal = null;
let modalHistory = [];

// Open Modal Function
function openModal(modalType) {
    const config = MODAL_CONFIGS[modalType];
    if (!config) {
        console.error(`Modal type "${modalType}" not found`);
        return;
    }
    
    // Store current modal in history
    if (currentModal) {
        modalHistory.push(currentModal);
    }
    
    createModal(config.title, config.content, modalType);
    currentModal = modalType;
}

// Create Modal Element
function createModal(title, content, modalType) {
    // Remove existing modal
    const existingModal = document.getElementById('modalContainer');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    modalContainer.className = 'modal-container';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('data-modal-type', modalType);
    
    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    closeButton.addEventListener('click', closeModal);
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = content;
    
    // Assemble modal
    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modalContainer.appendChild(modal);
    
    // Add to DOM
    document.body.appendChild(modalContainer);
    
    // Add event listeners
    setupModalEventListeners(modalContainer, modalType);
    
    // Animate in
    setTimeout(() => {
        modalContainer.classList.add('active');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Setup Modal Event Listeners
function setupModalEventListeners(modalContainer, modalType) {
    // Close on backdrop click
    modalContainer.addEventListener('click', function(e) {
        if (e.target === modalContainer) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Handle form submissions
    const forms = modalContainer.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleModalFormSubmit(form, modalType);
        });
    });
    
    // Handle internal links
    const internalLinks = modalContainer.querySelectorAll('a[href="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetModal = this.getAttribute('onclick')?.match(/openModal\('([^']+)'\)/)?.[1];
            if (targetModal) {
                openModal(targetModal);
            }
        });
    });
}

// Handle Modal Form Submit
function handleModalFormSubmit(form, modalType) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading-dots"><span></span><span></span><span></span></span>';
    
    // Simulate form processing
    setTimeout(() => {
        // Handle different form types
        switch (modalType) {
            case 'login':
                showNotification('Login successful!', 'success');
                closeModal();
                break;
                
            case 'signup':
                showNotification('Account created successfully!', 'success');
                closeModal();
                break;
                
            case 'contact':
                showNotification('Message sent! We\'ll get back to you soon.', 'success');
                closeModal();
                break;
                
            default:
                showNotification('Form submitted successfully!', 'success');
                closeModal();
        }
        
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 2000);
}

// Close Modal Function
function closeModal() {
    const modalContainer = document.getElementById('modalContainer');
    if (!modalContainer) return;
    
    // Animate out
    modalContainer.classList.remove('active');
    
    // Remove after animation
    setTimeout(() => {
        if (modalContainer.parentNode) {
            modalContainer.parentNode.removeChild(modalContainer);
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Restore previous modal if exists
        if (modalHistory.length > 0) {
            const previousModal = modalHistory.pop();
            openModal(previousModal);
        }
        
        currentModal = null;
    }, 300);
}

// Go Back Function (for modal navigation)
function goBack() {
    if (modalHistory.length > 0) {
        closeModal();
    }
}

// Export functions for global use
window.openModal = openModal;
window.closeModal = closeModal;
window.goBack = goBack;
