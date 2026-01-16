# Motorola’s Role in Aircraft Arresting Systems — Past & Present

**Overview**

Motorola’s presence in aircraft arresting technology spans three decades, beginning with rugged MOSCAD‑L radio RTUs in the 1990s and maturing into the ACE3600‑powered Phoenix Aircraft Arresting Control System (PAACS) that the U.S. Air Force uses today. This document traces that evolution, explains how Motorola hardware interfaces with BAK‑12/14 and SmartArrest energy absorbers, and summarizes current procurement, cybersecurity, and modernization trends.

## 1. Aircraft Arresting Systems in Brief
Aircraft arresting systems (AAS) are safety nets for fighter and training aircraft that cannot brake on their own. The most common devices are Curtiss‑Wright/ESCO’s BAK‑12 rotary‑friction brake and the retractable BAK‑14 hook‑cable, complemented by net‑barrier gear for non‑hook aircraft. When armed, a 2‑inch steel cable is stretched across the runway; on engagement, the cable transfers kinetic energy to friction disks or hydraulic absorbers, stopping the jet in ~1 000 ft.

## 2. Motorola’s Entry: The MOSCAD‑L Era (1990s – mid‑2000s)
*  Early barrier controls relied on hard‑wired circuits running thousands of feet beside runways. Air‑base engineers replaced these with Motorola’s MOSCAD‑L SCADA/PLC remote‑terminal units, which already handled antenna‑tower SCADA on USAF bases.
*  MOSCAD nodes in each barrier pit reported cable status, brake‑pressure, oxygen and fire alarms to a tower MOSCAD master via narrowband VHF links, giving controllers a push‑button way to raise/lower the cable without dispatching ground crews.

## 3. ACE3600 & the Phoenix Aircraft Arresting Control System (PAACS)
### 3.1  Architecture
| Component | Location | Function |
|-----------|----------|----------|
| **ACE3600 Tower Unit** | Control tower | Hosts operator panel; issues arm/raise/lower commands; logs events |
| **ACE3600 Barrier Node** | Barrier pit (each end) | Monitors brake pressure, pit gas, cable height; drives raise/lower cylinders |
| **Fire‑Station Repeater** | Firehouse | Read‑only alarm panel for pit oxygen/fire sensors |
| **Maintenance Bench Unit** | Shop | Off‑line diagnostics, firmware loads |

The network uses Motorola ASTRO/APX encrypted radios or IP backhaul; one tower unit can manage up to four BAK systems.

### 3.2  Capabilities
*  Accepts SCADA commands via IEC‑61131 ladder, MODBUS & DNP3.
*  Stores 10 000+ event records for accident reconstruction.
*  Supports remote firmware updates and FIPS‑validated crypto.

## 4. Acquisition & Standards
*  The PAACS‑1 controller is catalogued under **NSN 1710‑01‑428‑4272** and remains the USAF standard for runway control of BAK‑12/14 gear.
*  Periodic SAM.gov notices continue to sole‑source “Motorola ACE3600 RTU” hardware for PAACS tower units and barrier nodes.
*  National Guard RFPs specify PAACS when installing new SmartArrest energy absorbers on resurfaced runways.

## 5. Technology Stack & Cybersecurity
ACE3600 provides real‑time deterministic control, multiple serial/Ethernet ports, MDLC and IP protocols, and a hardened OS with role‑based access control. APX radios supply AES‑256 voice/data encryption, eliminating legacy analog radios that failed DoD crypto compliance. The stack integrates cleanly into base‑wide SCADA/BMS networks over fiber or microwave backhaul.

## 6. Ongoing Modernization & Future Directions
Recent ANG projects add APX‑N radios, IPv6 tunneling, and link PAACS data to digital tower‑lighting/HUD systems. Overseas NATO bases are coupling PAACS to Curtiss‑Wright SmartArrest® brakes for reduced maintenance. Future efforts target AI‑based video analytics that automatically arm the barrier when an aircraft declares an emergency on approach.

---

### Timeline of Major Milestones
* **Early 1990s:** MOSCAD‑L RTUs selected for first radio‑controlled BAK‑12/14 sites.  
* **Mid‑2000s:** ACE3600 released; Global Data Specialists (GDS) productizes PAACS.  
* **2010‑2015:** USAF assigns NSNs and mandates PAACS for new installs.  
* **2018:** SC ANG sole‑source justification cites ACE3600 as only approved controller.  
* **2020‑present:** Conversions to APX radios, SmartArrest brakes, and IP backhaul.

---

## References
1. Motorola Solutions, *Phoenix Aircraft Arresting Control System Application Page*  
   https://www.motorolasolutions.com/en_us/application-catalog/phoenix-aircraft-arresting-control-system-paacs.html  
2. Motorola Solutions, *PAACS Brochure* (DOCX)  
   https://www.motorolasolutions.com/content/dam/msi/docs/phoenix_aircraft_arresting_control_system_brochure.docx  
3. Motorola Solutions & GDS, *SCADA Solutions Based on Motorola ACE3600 & ASTRO IV&D* (PDF)  
   https://www.motorolasolutions.com/content/dam/msi/docs/gds_apps_for_motorola.pdf  
4. Global Data Specialists, *Aircraft Arresting Control Systems*  
   https://www.gbl-data.com/aircraft-arresting  
5. WBParts, *NSN 1710‑01‑428‑4272 – Aircraft Arresting/Barrier Control System*  
   https://www.wbparts.com/rfq/1710-01-428-4272.html  
6. Curtiss‑Wright EMS, *Net Barrier & Cable Arresting Systems*  
   https://www.cw-ems.com/arresting-systems/net-barriers---emergency-arresting-systems-for-military-aircraft  
7. SAM.gov, *Notice of Intent to Sole Source – PAACS BAK‑14*  
   https://sam.gov/opp/bfd0519737944994a583e1c66f592970/view  
8. Comtech Radio, *Motorola ACE3600 RTU Overview*  
   https://www.comtechradio.com/motorola/motorola-ace3600.htm  
9. Day Wireless Systems, *ACE3600 Feature Sheet*  
   https://www.daywireless.com/motorola/ace3600.htm  
10. Part‑Miner, *PAACS‑1 NSN Lookup*  
    https://part-miner.com/web/search/1710014284272/1  
11. DVIDS, *F‑15 Tests Aircraft Arresting Gear* (Video)  
    https://www.dvidshub.net/video/936860/f-15-tests-aircraft-arresting-gear  
12. FAA, *Advisory Circular 150/5220‑9B – Aircraft Arresting Systems on Civil Airports*  
    https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_150_5220_9B_aircraft_arresting_system.pdf  
