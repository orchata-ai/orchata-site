# Contributing to Orchata AI Website

Thank you for your interest in contributing to the Orchata AI website! We welcome contributions from the community and appreciate your help in making our project better.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement, please:

1. Check if the issue already exists in our [GitHub Issues](https://github.com/orchata-ai/orchata-site/issues)
2. Create a new issue with a clear title and description
3. Include steps to reproduce the issue (if applicable)
4. Add relevant labels and assignees

### Submitting Pull Requests

1. **Fork the repository** and create a new branch from `master`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Commit your changes** with clear, descriptive commit messages
5. **Push to your fork** and submit a pull request

## Development Setup

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- Git

### Getting Started

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/orchata-site.git
cd orchata-site

# Install dependencies
bun install

# Start development server
bun run dev
```

## Coding Standards

### TypeScript/React

- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use functional components over class components
- Implement proper TypeScript types and interfaces

### Styling

- Use Tailwind CSS for styling
- Follow mobile-first responsive design principles
- Maintain consistency with existing design patterns
- Use CSS custom properties for theme variables

### Code Style

- Use Prettier for code formatting
- Follow ESLint rules and fix any warnings
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### File Organization

- Place components in appropriate directories
- Use index files for clean imports
- Follow the existing project structure
- Group related files together

## Commit Guidelines

We follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(hero): add new floating animation elements
fix(theme): resolve dark mode toggle issue
docs(readme): update installation instructions
style(button): improve hover state transitions
```

## Pull Request Process

1. **Create a descriptive title** that explains what the PR does
2. **Provide a detailed description** of changes made
3. **Link related issues** using keywords like "Fixes #123"
4. **Include screenshots** for UI changes
5. **Ensure all checks pass** (linting, building, etc.)
6. **Request review** from maintainers

## What We're Looking For

### Bug Fixes
- Clear reproduction steps
- Minimal code changes
- Proper testing

### New Features
- Well-documented functionality
- Responsive design
- Accessibility considerations
- Performance optimization

### Documentation
- Clear explanations
- Code examples
- Updated README if needed

### UI/UX Improvements
- Consistent with existing design
- Mobile-friendly
- Smooth animations and transitions
- Good user experience

## Areas for Contribution

- **UI Components**: New reusable components
- **Animations**: Smooth transitions and effects
- **Performance**: Optimization and loading improvements
- **Accessibility**: Better screen reader support
- **Documentation**: Code comments and README updates
- **Testing**: Unit and integration tests
- **Bug Fixes**: Issues reported in GitHub

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to create a welcoming environment for all contributors regardless of background or experience level.

## Questions?

If you have any questions about contributing, feel free to:

- Open a GitHub issue
- Contact us through our website
- Reach out to maintainers

Thank you for contributing to Orchata AI! 🚀
