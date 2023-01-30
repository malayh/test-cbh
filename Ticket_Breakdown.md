# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

# Your Breakdown Here

## Ability to add custom id, which will be used in reports
### Backend Changes **(Ticket: 1)**


1. Add table `AgentCustomIds` with columns `agent_id`, `facility_id`, `custom_id` (Because an Agent can have multiple custom ids for different facilities)
   - Estimated time: <1 hour


2. Modify `generateReport` to join with `AgentCustomIds` and use the `custom_id` if it exists. (Assuming `Shift` table has a foreign key to `Agent` table)
   - Estimated time: 2 hour. (Counting time to write tests)

3. Build API endpoint to add custom id
   - Estimated time: ~1 hour (Counting time to write tests)    

**Overall estimated time: 4 hours, (Half a day)**


### Fronted changes **(Ticket: 2)**
1. Add functionality in Facility manager's dashboard to add custom id
   - Estimated time: 2 hours (Counting time to write tests and adding tracking)


2. Wire up API endpoint to add custom id
   - Estimated time: <1 hour (Including sanity checks and integration tests)

**Overall estimated time: ~3 hours (Half a day)**
  