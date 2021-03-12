export class Request {
  constructor(
    private id: number | null,
    private clientName: string,
    private location: string,
    // ----need to verify the type
    private requestDate: Date,
    private requiredDate: Date,
    private pickedDate: Date,
    private sameDayReturn: boolean,
    private username: string
  ) {
  }
}
