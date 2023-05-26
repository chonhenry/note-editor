"use client";

interface CreateNoteBtnProps {
  userId: string;
}

const CreateNoteBtn: React.FC<CreateNoteBtnProps> = ({ userId }) => {
  async function handleClick() {
    console.log("create note button clicked");
    const response = await fetch("/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "new note 1",
        userId,
      }),
    });

    console.log(response);

    const note = await response.json();
    console.log(note);
  }

  return (
    <button
      className="text-xs sm:text-lg sm:px-5 sm:py-2 px-3 py-1 rounded-lg bg-primary-dark text-primary-light 
                dark:bg-primary-light dark:text-primary-dark"
      onClick={handleClick}
    >
      + New Note
    </button>
  );
};

export default CreateNoteBtn;
