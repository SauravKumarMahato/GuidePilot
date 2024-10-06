# <p align="center">GuidePilot: Student Information Management</p>

GuidePilot is your ultimate solution for managing student information, tracking fees, and providing feedback. It offers a streamlined interface for educators and administrators to handle student data with ease. With intuitive features for adding, editing, and managing student records, GuidePilot ensures a seamless and efficient experience.

<!-- ## Dev.to Article
https://dev.to/sauravkumarmahato/project-guidepilot -->

## Table of Contents

- [Features](#features)
- [UI Samples](#ui-samples)
- [Demo](#demo)
- [TechStack](#techstack)
- [Installation & Running Project](#installation--running-project)
- [Contributing](#contributing)
- [License](#license)

## Features

**Comprehensive Student Information Management(SIM)**

GuidePilot allows you to easily manage student records, add new students, update their information, and track their progress.

---

**Student Fee Management**

Effortlessly track student fees, manage payments. GuidePilot simplifies the process and reduces administrative burdens for educators.

---

**FeedBack to Student Record Management**

Effortlessly track student fees, manage payments. GuidePilot simplifies the process and reduces administrative burdens for educators.

---

## UI Samples

<details>
   <summary>Opening Page</summary>
   <img src="https://github.com/user-attachments/assets/2e524c95-7b93-4b70-b7a4-3c37deb5ebf1" width=750/>
 </details>
 
<details>
   <summary>Home Page </summary>
   <img src="https://github.com/user-attachments/assets/97224349-f67d-4c79-b88c-704f878ac05d" width=750/>
 </details>

 <details>
   <summary>Sidebar Option</summary>
   <img src="https://github.com/user-attachments/assets/1e3d530c-c27e-4144-b285-0ab4645b00d8" width=750/>
 </details>

 <details>
   <summary> Student Information Management </summary>
   <img src="https://github.com/user-attachments/assets/16ec7364-730a-4505-b6d2-a354c11032b0" width=750/>
 </details>

 <details>
   <summary>Student Fee Management</summary>
   <img src="https://github.com/user-attachments/assets/54820578-8d29-47f8-a64b-6bd95ccbc042" width=750/>
 </details>

 <details>
   <summary>Feedback to Student Record</summary>
   <img src="https://github.com/user-attachments/assets/65e23906-b103-41e0-9a6e-b703f6179e8b" width=750/>
 </details>

## Demo
<!-- demo link -->

https://github.com/user-attachments/assets/390f18fe-e1a2-4efd-b548-bcbb8bc937ec

## TechStack

- Next.js
- TypeScript
- Tailwind CSS (Material UI)
- CopilotKit 

## Installation & Running Project

### Setup

1. Clone the repository:

```bash
git clone https://github.com/SauravKumarMahato/GuidePilot.git
```

2. Navigate to the cloned directory:

```bash
cd GuidePilot/guidepilot
```

3. Add your environment variables to `.env.local` inside this directory GuidePilot/guidepilot/.env.local:

```
OPENAI_API_KEY=your-api-key
```

4. Install the required dependencies:

```bash
yarn install 
```

5. Finally, run the project:

```bash
yarn run dev
```

## The Copilot-Specific parts of the code:

Here’s a detailed list of the Copilot Kit statements used in the project along with brief explanations, formatted for a README file:


### Copilot Kit Implementation
---
In this project, we leverage **Copilot Kit** to create an enhanced user experience through smart suggestions, natural language interaction, and streamlined data handling. Below are the key Copilot Kit components used:

### 1. `<CopilotKit />`
---
This component initializes the Copilot Kit in your application. It wraps the entire app or specific pages to provide the necessary CopilotKit features, including suggestions and chat interfaces.

```tsx
<CopilotKit url="/api/copilotkit">
  {/* Your application code */}
</CopilotKit>
```

**Explanation:**  
- This wraps the portion of your app where you want CopilotKit to be active. It connects to the backend API, where all AI-driven suggestions are fetched. Without this, none of the smart features would be operational.

---

### 2. `<CopilotTextarea />`
This component is used for text inputs where suggestions and smart actions are required. It behaves like a standard `<textarea>`, but integrates CopilotKit's suggestion feature to provide autosuggestions.

```tsx
<CopilotTextarea
  label="description"
  placeholder="Description about employee"
  value={formData.qualities}
  onValueChange={(value: string) => setFormData({ ...formData, qualities: value })}
  autosuggestionsConfig={{
    textareaPurpose: "Write about student description",
    chatApiConfigs: {
      suggestionsApiConfig: {
        forwardedParams: {
          max_tokens: 20,
          stop: [".", "?", "!"],
        },
      },
    },
  }}
/>
```

**Explanation:**  
- **Autosuggestions:** As the user types into the textarea, the component fetches AI-driven suggestions based on the current input. This enhances user interaction by reducing manual effort and providing contextually relevant suggestions.

---

### 3. `useCopilotReadable()`
This hook helps manage readable content in your Copilot Kit implementation. It is often used in scenarios where you want to dynamically load data from external sources and present it in a Copilot-compatible format.

```tsx
const { readableData, updateReadableData } = useCopilotReadable();
```

**Explanation:**  
- **Readable Data Management:** It allows developers to control the data that the AI reads and interprets, making the chatbot interaction smarter and more context-aware.

---

### 4. `useCopilotAction()`
This hook enables custom actions, allowing you to configure specific behaviors and triggers based on user input. It makes Copilot Kit capable of performing more complex tasks.

```tsx
const { triggerAction } = useCopilotAction();
```

**Explanation:**  
- **Custom Actions:** This allows the app to listen for user commands and perform specific actions (e.g., adding new students, fetching data). It can be linked to button clicks or other triggers, making the app more dynamic and responsive.

---

### 5. `<CopilotSidebar />`
This component adds an interactive sidebar where users can chat and receive suggestions or commands. It is typically placed within the layout to provide a chat interface for interacting with Copilot Kit.

```tsx
<CopilotSidebar />
```

**Explanation:**  
- **Interactive Sidebar:** It enables a natural language chat interface in your application, allowing users to interact with the dataset (e.g., adding, updating, or querying student records) through natural conversation.

---

### 6. `suggestionsApiConfig`
This configuration is used to fine-tune how suggestions are fetched from the API. You can specify parameters like `max_tokens`, `stop`, and others to control the suggestion behavior.

```tsx
autosuggestionsConfig={{
  chatApiConfigs: {
    suggestionsApiConfig: {
      forwardedParams: {
        max_tokens: 20,
        stop: [".", "?", "!"],
      },
    },
  },
}}
```

**Explanation:**  
- **API Configurations:** This allows you to control how the suggestions are generated. You can define limits like the maximum number of words in a suggestion, stopping conditions (e.g., end of sentence), and more. It customizes the AI interaction to fit your application's needs.

### Summary
These Copilot Kit statements are critical in transforming a basic application into an intelligent platform with autosuggestions, smart record creation, and a dynamic user interface that reacts to natural language input. Each component has its own role in creating a seamless user experience with real-time assistance.

## Contributing

We encourage contributions to enhance and elevate [GuidePilot](https://github.com/SauravKumarMahato/GuidePilot.git). Don't hesitate to submit issues, suggest new features, or initiate pull requests. Kindly follow our Code of Conduct for a respectful and collaborative environment.

## License

This project is licensed under the [MIT License](/LICENSE).

---

Feel free to copy and paste this into your project!