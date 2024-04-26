
export function inputValidationMiddleware(req,res,next) {

    const { title, description, status, date } = req.body;

    // Title validation 
    if(!title){
      return res.status(400).json({ error: "Please enter a title." });
    }
    const trimmedTitle = title.trim();
    if (!trimmedTitle){
      return res.status(400).json({ error: "Please enter a valid title." });
    }

    // Description validation
    if(!description){
      return res.status(400).json({ error: "Please enter a description." });
    }
    const trimmedDescription = description.trim();
    if (!trimmedDescription){
      return res.status(400).json({ error: "Please enter a valid description." })
    };

    // Status validation
    if(!status){
      return res.status(400).json({ error: "Please enter a status." });
    }
    const trimmedStatus = status.trim();
    if (trimmedStatus.toLowerCase() !== "pending" && 
        trimmedStatus.toLowerCase() !== "in progress" && 
        trimmedStatus.toLowerCase() !== "completed")
     {
      return res.status(400).json(
        {error:"Please enter a valid status. The status can only be one of the following: Pending, In Progress, or Completed.", }
    );
    }

    // Date validation
    if(!date){
      return res.status(400).json({ error: "Please enter a date." });
    }
    const trimmedDate = date.trim();
    if (!isValidDateFormat(trimmedDate)) {
        return res.status(400).json({ error: "Please enter a valid date in the format (dd-mm-yyyy)." });       
    }

    next();

}

// Date validation function
function isValidDateFormat(dateString) {
    const dateFormatRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(\d{4})$/; 
    return dateFormatRegex.test(dateString);
}


