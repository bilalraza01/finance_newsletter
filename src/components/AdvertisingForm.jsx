import React, { useState } from "react";
import { 
  CircularProgress,
  TextField,
  Alert,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText
} from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material";

const AdvertisingForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success"); // Can be "success" or "error"
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    industry: "",
    hearAboutUs: "",
    targetAudience: "",
    additionalDetails: "",
    advertiseWhen: "",
    website: "",
    budget: "",
    isAgency: [],
    advertisingGoals: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (e, fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataForKit = {
        email_address: formData.email,
        "fields[first_name]": formData.firstName,
        "fields[last_name]": formData.lastName,
        "fields[your_job_title]": formData.jobTitle,
        "fields[company]": formData.company,
        "fields[industry]": formData.industry,
        "fields[how_did_you_hear_about_us]": formData.hearAboutUs,
        "fields[target_audience]": formData.targetAudience,
        "fields[any_additional_details]": formData.additionalDetails,
        "fields[when_are_you_looking_to_advertise]": formData.advertiseWhen,
        "fields[website]": formData.website,
        "fields[budget]": formData.budget,
        "fields[are_you_working_on_behalf_of_an_agency]": formData.isAgency,
        "fields[what_are_your_advertising_goals]": formData.advertisingGoals,
      }
      const response = await axios.post(
        `https://app.kit.com/forms/7421329/subscriptions`,
        dataForKit,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Ensure the data is sent correctly
          },
        }
      );
      if (response.status === 200) {
        setMessage("Form submitted successfully!");
        setMessageType("success");
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again later.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  const agencyOptions = ["Yes", "No"];
  const advertisingGoalsOptions = ["Build Awareness", "Get Clicks/Engagement/Leads", "Other"];
  const budgetOptions = ["Under $5,000", "$5,000 - $10,000", "Over $10,000"];

  return (
    <form onSubmit={handleSubmit}>
      {message && <Alert severity={messageType} sx={{marginBottom: "20px"}}>{message}</Alert>}
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Your Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Industry"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="How Did You Hear About Us?"
        name="hearAboutUs"
        value={formData.hearAboutUs}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Target Audience"
        name="targetAudience"
        value={formData.targetAudience}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Any Additional Details"
        name="additionalDetails"
        value={formData.additionalDetails}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="When Are You Looking to Advertise?"
        name="advertiseWhen"
        value={formData.advertiseWhen}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Website"
        name="website"
        value={formData.website}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Budget</InputLabel>
        <Select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        >
          {budgetOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Are You Working on Behalf of an Agency?</InputLabel>
        <Select
          name="isAgency"
          value={formData.isAgency}
          onChange={(e) => handleMultiSelectChange(e, "isAgency")}
          multiple
          renderValue={(selected) => selected.join(", ")}
        >
          {agencyOptions.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={formData.isAgency.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>What Are Your Advertising Goals?</InputLabel>
        <Select
          name="advertisingGoals"
          value={formData.advertisingGoals}
          onChange={(e) => handleMultiSelectChange(e, "advertisingGoals")}
          multiple
          renderValue={(selected) => selected.join(", ")}
        >
          {advertisingGoalsOptions.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={formData.advertisingGoals.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{
          margin: "20px 0",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          backgroundColor: theme.primary.main,
          textTransform: "none",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(0, 106, 254, 0.8)",
          },
        }}
      >
        {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Submit Form"}
      </Button>
    </form>
  );
};

export default AdvertisingForm;
