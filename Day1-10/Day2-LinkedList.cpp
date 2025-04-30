#include <cstring>
#include <iostream>
using namespace std;

class Event {
private:
  int eventId;
  char *eventType;
  char *eventName;

public:
  // Default constructor
  Event() {
    eventId = 0;
    eventType = nullptr;
    eventName = nullptr;
  }

  // Parameterized constructor
  Event(int id, const char *type, const char *name) {
    eventId = id;

    eventType = new char[strlen(type) + 1];
    strcpy(eventType, type);

    eventName = new char[strlen(name) + 1];
    strcpy(eventName, name);
  }

  // Deep Copy Constructor
  Event(const Event &e) {
    eventId = e.eventId;

    eventType = new char[strlen(e.eventType) + 1];
    strcpy(eventType, e.eventType);

    eventName = new char[strlen(e.eventName) + 1];
    strcpy(eventName, e.eventName);
  }

  // Destructor
  ~Event() {
    delete[] eventType;
    delete[] eventName;
  }

  // Setters
  void setEventId(int id) { eventId = id; }

  void setEventType(const char *type) {
    if (eventType)
      delete[] eventType;
    eventType = new char[strlen(type) + 1];
    strcpy(eventType, type);
  }

  void setEventName(const char *name) {
    if (eventName)
      delete[] eventName;
    eventName = new char[strlen(name) + 1];
    strcpy(eventName, name);
  }

  // Getters
  int getEventId() const { return eventId; }

  const char *getEventType() const { return eventType; }

  const char *getEventName() const { return eventName; }

  // Display Function
  void display() const {
    cout << "Event ID: " << eventId << endl;
    cout << "Event Type: " << eventType << endl;
    cout << "Event Name: " << eventName << endl;
  }
};

// Do not modify this main function
int main() {
  Event event1(101, "Conference", "Tech Innovations");

  Event event2 = event1;

  Event event3;
  event3.setEventId(202);
  event3.setEventType("Corporate Party");
  event3.setEventName("Annual Celebration");

  cout << "Event 1 Details:\n";
  event1.display();

  cout << "\nEvent 2 (Copied from Event 1):\n";
  event2.display();

  cout << "\nAccessing Event 3 details using getters:\n";
  cout << "Event ID: " << event3.getEventId() << endl;
  cout << "Event Type: " << event3.getEventType() << endl;
  cout << "Event Name: " << event3.getEventName() << endl;

  return 0;
}
