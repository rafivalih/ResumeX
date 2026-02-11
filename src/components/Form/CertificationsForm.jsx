import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Award, Plus, Trash2, ExternalLink } from 'lucide-react';

const CertificationsForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const { certifications } = resumeData;

  const addCertification = () => {
    const newCert = {
      id: Date.now().toString(),
      title: '',
      certId: '',
      organization: '',
      startDate: '',
      endDate: '',
      noExpiry: false,
      url: '',
    };
    updateResumeData({ certifications: [...certifications, newCert] });
  };

  const updateCertification = (id, field, value) => {
    updateResumeData({
      certifications: certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      ),
    });
  };

  const removeCertification = (id) => {
    updateResumeData({ certifications: certifications.filter((cert) => cert.id !== id) });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Certifications</h3>
          <p className="text-sm text-muted-foreground">Add your professional certifications</p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addCertification}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Certification
        </Button>
      </div>

      {certifications.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-border rounded-lg">
          <Award className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No certifications added yet</p>
          <Button
            type="button"
            variant="link"
            onClick={addCertification}
            className="mt-2"
          >
            Add your first certification
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="relative p-5 bg-muted/30 rounded-lg border border-border animate-slide-up"
            >
              <div className="absolute -top-3 left-4 bg-card px-2 text-xs font-medium text-muted-foreground">
                Certification {index + 1}
              </div>
              <button
                type="button"
                onClick={() => removeCertification(cert.id)}
                className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Certification Title</Label>
                  <Input
                    placeholder="AWS Solutions Architect"
                    value={cert.title}
                    onChange={(e) => updateCertification(cert.id, 'title', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Organization</Label>
                  <Input
                    placeholder="Amazon Web Services"
                    value={cert.organization}
                    onChange={(e) => updateCertification(cert.id, 'organization', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Credential ID (Optional)</Label>
                  <Input
                    placeholder="ABC123XYZ"
                    value={cert.certId}
                    onChange={(e) => updateCertification(cert.id, 'certId', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Credential URL
                  </Label>
                  <Input
                    placeholder="https://credential.net/..."
                    value={cert.url}
                    onChange={(e) => updateCertification(cert.id, 'url', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Issue Date</Label>
                  <Input
                    placeholder="Jan 2023"
                    value={cert.startDate}
                    onChange={(e) => updateCertification(cert.id, 'startDate', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Expiration Date</Label>
                  <Input
                    placeholder="Jan 2026"
                    value={cert.endDate}
                    onChange={(e) => updateCertification(cert.id, 'endDate', e.target.value)}
                    disabled={cert.noExpiry}
                    className="bg-background disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Checkbox
                  id={`no-expiry-${cert.id}`}
                  checked={cert.noExpiry}
                  onCheckedChange={(checked) =>
                    updateCertification(cert.id, 'noExpiry', checked)
                  }
                />
                <Label htmlFor={`no-expiry-${cert.id}`} className="text-sm text-muted-foreground cursor-pointer">
                  This certification does not expire
                </Label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificationsForm;
